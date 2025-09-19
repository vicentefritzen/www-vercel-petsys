find ../ -type f \( -name "*.log" -o -name "*.local" -o -name ".DS_Store" -o -name "*.suo" -o -name "*.ntvs*" -o -name "*.njsproj" -o -name "*.sln" -o -name "*.sw?" \) ! -path "./.vscode/*" -delete
find ../ -type d -name "node_modules" -exec rm -rf {} +
find ../ -type d \( -name "bin" -o -name "obj" \) -exec rm -rf {} +
find ../ -type f -name '*\.Identifier*' -delete