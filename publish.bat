@echo off

rd /s /q public\\extends
rd /s /q public\\publish
rd /s /q public\\publish-zip
mkdir public\\publish-zip


cd Linker.web
call npm install
call npm run build 
cd ../

for %%r in (win-x64,win-arm64) do (
	dotnet publish ./Linker.service -c release -f net8.0 -o public/extends/%%r/Linker-%%r/  -r %%r -p:PublishTrimmed=true  -p:TrimMode=partial  --self-contained true -p:TieredPGO=true  -p:DebugType=none -p:DebugSymbols=false  -p:EnableCompressionInSingleFile=true -p:DebuggerSupport=false -p:EnableUnsafeBinaryFormatterSerialization=false -p:EnableUnsafeUTF7Encoding=false -p:HttpActivityPropagationSupport=false -p:InvariantGlobalization=true  -p:MetadataUpdaterSupport=false  -p:UseSystemResourceKeys=true
	echo F|xcopy "Linker.tray.win\\dist\\*" "public\\extends\\%%r\\Linker-%%r\\*"  /s /f /h /y
	echo F|xcopy "Linker\\msquic.dll" "public\\extends\\%%r\\Linker-%%r\\msquic.dll"  /s /f /h /y
	echo F|xcopy "Linker\\msquic-openssl.dll" "public\\extends\\%%r\\Linker-%%r\\msquic-openssl.dll"  /s /f /h /y
)
for %%r in (linux-x64,linux-arm64,osx-x64,osx-arm64) do (
	echo F|xcopy "Linker\\plugins\\tuntap\\tun2socks-%%r" "public\\extends\\%%r\\Linker-%%r\\plugins\\tuntap\\tun2socks"  /s /f /h /y
)
for %%r in (win-x64,win-arm64) do (
	echo F|xcopy "Linker\\plugins\\tuntap\\tun2socks-%%r" "public\\extends\\%%r\\Linker-%%r\\plugins\\tuntap\\tun2socks.exe"  /s /f /h /y
)


for %%r in (win-x64,win-arm64,linux-x64,linux-arm64,osx-x64,osx-arm64) do (
	
	dotnet publish ./Linker -c release -f net8.0 -o ./public/publish/%%r/Linker-%%r  -r %%r -p:PublishTrimmed=true  -p:TrimMode=partial  --self-contained true -p:TieredPGO=true  -p:DebugType=none -p:DebugSymbols=false -p:PublishSingleFile=true -p:EnableCompressionInSingleFile=true -p:DebuggerSupport=false -p:EnableUnsafeBinaryFormatterSerialization=false -p:EnableUnsafeUTF7Encoding=false -p:HttpActivityPropagationSupport=false -p:InvariantGlobalization=true  -p:MetadataUpdaterSupport=false  -p:UseSystemResourceKeys=true
	echo F|xcopy "public\\extends\\%%r\\Linker-%%r\\*" "public\\publish\\%%r\\Linker-%%r\\*"  /s /f /h /y

	echo F|xcopy "public\\extends\\any\\*" "public\\publish\\%%r\\Linker-%%r\\*"  /s /f /h /y

	7z a -tzip ./public/publish-zip/Linker-%%r.zip ./public/publish/%%r/*
)
