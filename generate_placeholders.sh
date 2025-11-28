#!/bin/bash
# 快速生成 placeholder 圖片腳本

cd "$(dirname "$0")/images/thumbs"

echo "🎨 生成專案 placeholder 圖片..."

# 為每個專案創建佔位圖
projects=("transcendence" "webserv" "inception" "cub3d" "minishell" "philosophers")

for project in "${projects[@]}"; do
    # 使用 ImageMagick 創建簡單的佔位圖（如果已安裝）
    if command -v convert &> /dev/null; then
        convert -size 600x400 -background "#8B7355" -fill "#F5F1E8" \
                -gravity center -pointsize 40 \
                label:"$project" "${project}.jpg"
        echo "✅ Created ${project}.jpg"
    else
        echo "⚠️  ImageMagick not installed. Creating empty file..."
        touch "${project}.jpg"
    fi
done

echo ""
echo "📝 注意：這些是臨時佔位圖"
echo "請用你的真實專案截圖替換它們！"
echo ""
echo "建議尺寸：600x400 px"
echo "格式：JPG 或 PNG"
