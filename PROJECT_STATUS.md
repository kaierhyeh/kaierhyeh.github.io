# 🎯 Portfolio 專案進度總覽

**專案名稱：** Kai-Erh (Alex) YEH - 個人作品集網站  
**網址：** kaierhyeh.github.io  
**最後更新：** 2025-12-10

## 🖥️ 本地測試

```bash
# 在專案根目錄執行
cd /home/kyeh/portfolio
python3 -m http.server 8000

# 然後在瀏覽器打開
# http://localhost:8000
```

---

## ✅ 已完成功能

### 1. 基礎設定
- ✅ HTML5 UP Strata 模板配置
- ✅ 個人資訊填寫（姓名、郵箱、GitHub、LinkedIn）
- ✅ École 42 背景介紹
- ✅ 專案列表（6 個 42 專案）

### 2. 設計風格
- ✅ **棕色主題**配色方案
  - 背景色：`#F5F1E8`（奶油色）
  - 主色：`#8B7355`（溫暖棕）
  - 深色：`#4A4035`（深棕）
  - 輔助色：`#A67C52`（淺棕）
- ✅ **頭像優化**
  - 尺寸放大至 9em
  - 圖片縮放 1.3 倍
  - 位置調整（center 30%）
- ✅ **響應式設計**
  - 移除固定換行符（適應不同字體大小）
  - 移動端適配

### 3. 語言切換功能
- ✅ **雙語支援**：英文 + 法文
- ✅ **固定位置**：右上角浮動按鈕
- ✅ **國旗圖標**：🇬🇧 EN | 🇫🇷 FR
- ✅ **LocalStorage**：記住用戶語言選擇
- ✅ **完整翻譯**：
  - Header 介紹
  - 關於我的內容（3 段）
  - 所有專案描述
  - 聯絡表單
  - 按鈕文字

### 4. 專案圖片畫廊
- ✅ **Pong Game**：3 張圖片（pong.png, pong_tournament.png, pong_chat.png）
- ✅ **HTTP Server**：2 張圖片（index.jpg, form.jpg）
- ✅ **Poptrox Lightbox** 配置
  - 獨立畫廊（每個專案獨立）
  - 左右箭頭導航
  - 遮罩顏色：`#28555e`（深青綠色）
  - 透明度：0.85

### 5. 視覺優化
- ✅ 縮圖尺寸統一（217px 高度）
- ✅ 圖片 hover 效果
- ✅ CSS 清理（移除 br 隱藏規則）

---

## ⏳ 進行中

### 專案截圖收集
| 專案 | 狀態 | 圖片數量 | 備註 |
|------|------|---------|------|
| **Pong Game** | ✅ 完成 | 3 張 | 已有真實截圖 |
| **HTTP Server** | ✅ 完成 | 2 張 | 已有真實截圖 |
| **cub3D** | ⏳ 待處理 | 0 張 | 使用 placeholder |
| **Minishell** | ⏳ 待處理 | 0 張 | 使用 placeholder |
| **Inception** | ⏳ 待處理 | 0 張 | 使用 placeholder |
| **Philosophers** | ⏳ 待處理 | 0 張 | 使用 placeholder |

---

## 📋 待辦事項

### 高優先級
- [ ] **完成剩餘專案截圖**（4 個專案）
  - [ ] cub3D：遊戲畫面截圖
  - [ ] Minishell：終端執行指令截圖
  - [ ] Inception：Docker 容器/WordPress 截圖
  - [ ] Philosophers：終端輸出截圖

- [ ] **Formspree 表單設定**
  - [ ] 註冊 Formspree 帳號
  - [ ] 獲取 Form ID
  - [ ] 替換 `index.html` 中的 `YOUR_FORM_ID`
  - [ ] 測試表單功能

- [ ] **部署到 GitHub Pages**
  - [ ] 推送到 `kaierhyeh.github.io` 倉庫
  - [ ] 確認 GitHub Pages 設定
  - [ ] 測試線上版本

### 中優先級
- [ ] **內容優化**
  - [ ] 檢查所有英文/法文翻譯
  - [ ] 確認專案描述準確性
  - [ ] 添加更多專案細節（可選）

- [ ] **SEO 優化**
  - [ ] 添加 meta description
  - [ ] 添加 Open Graph 標籤
  - [ ] 生成 sitemap.xml
  - [ ] 添加 robots.txt

- [ ] **性能優化**
  - [ ] 壓縮圖片（特別是 fulls 資料夾）
  - [ ] 啟用瀏覽器快取
  - [ ] 測試載入速度

### 低優先級
- [ ] **擴展功能**（可選）
  - [ ] 添加更多語言（德文？中文？）
  - [ ] 添加深色模式
  - [ ] 添加專案篩選功能
  - [ ] 添加部落格區塊

- [ ] **清理工作**
  - [ ] 刪除未使用的 placeholder 圖片
  - [ ] 刪除 SASS 源碼（如果不需要）
  - [ ] 刪除備份檔案
  - [ ] 整理 git 歷史

---

## 📸 專案截圖指南

### cub3D
**建議截圖：**
- 第一人稱遊戲畫面（顯示紋理牆壁）
- 不同角度/房間的視角
- 包含 sprite/敵人（如果有）

**如何截圖：**
```bash
cd ~/42/cub3D
./cub3D maps/your_map.cub
# 按 PrtScn 或使用截圖工具
```

### Minishell
**建議截圖：**
- Shell 提示符和基本指令執行
- Pipe 和 redirection 範例
- 環境變數操作

**截圖範例指令：**
```bash
cd ~/42/minishell
./minishell
# 執行：ls -la | grep minishell | wc -l
# 執行：echo "test" > file.txt && cat file.txt
# 執行：export TEST=hello && echo $TEST
```

### Inception
**建議截圖：**
- `docker ps` 顯示所有容器
- WordPress 網站首頁
- Adminer/phpMyAdmin 介面（可選）

**如何截圖：**
```bash
cd ~/42/Inception
docker-compose up -d
docker ps
# 打開瀏覽器：localhost 截圖
```

### Philosophers
**建議截圖：**
- 終端輸出（顯示哲學家狀態）
- 時間戳記清晰可見
- 不同測試場景（5 個/200 個哲學家）

**如何截圖：**
```bash
cd ~/42/philosophers
./philo 5 800 200 200
# 等待幾秒後截圖終端
```

---

## 🚀 部署檢查清單

### 部署前確認
- [ ] 所有圖片已上傳
- [ ] Formspree Form ID 已設定
- [ ] 測試所有連結
- [ ] 測試語言切換
- [ ] 測試圖片畫廊
- [ ] 測試聯絡表單
- [ ] 在不同瀏覽器測試（Chrome, Firefox, Safari）
- [ ] 在手機上測試

### 部署步驟
```bash
# 1. 確認 git 狀態
git status

# 2. 添加所有檔案
git add .

# 3. 提交變更
git commit -m "Complete portfolio with bilingual support and project galleries"

# 4. 推送到 GitHub
git push origin main

# 5. 確認 GitHub Pages 設定
# 到 GitHub 倉庫 Settings > Pages
# Source: Deploy from a branch
# Branch: main / (root)

# 6. 等待部署（約 1-2 分鐘）
# 訪問：https://kaierhyeh.github.io
```

---

## 📁 專案結構

```
/home/kyeh/portfolio/
├── index.html                          ✅ 主頁面（已完成）
├── assets/
│   ├── css/
│   │   ├── main.css                   ✅ 棕色主題樣式
│   │   ├── fontawesome-all.min.css   ✅ 圖標
│   │   └── images/overlay.png         ✅ 背景紋理
│   ├── js/
│   │   ├── main.js                    ✅ Poptrox 配置（遮罩顏色已調整）
│   │   ├── language-switcher.js      ✅ 語言切換功能
│   │   ├── jquery.min.js              ✅ jQuery
│   │   ├── jquery.poptrox.min.js      ✅ Lightbox 插件
│   │   ├── browser.min.js             ✅ 瀏覽器檢測
│   │   ├── breakpoints.min.js         ✅ 響應式斷點
│   │   └── util.js                    ✅ 工具函數
│   ├── sass/                          ⚠️  可考慮刪除（已編譯）
│   └── webfonts/                      ✅ FontAwesome 字體
├── images/
│   ├── bg.jpg                         ✅ Header 背景
│   ├── photo de 42.jpg                ✅ 個人頭像
│   ├── fulls/                         ✅ Lightbox 大圖
│   │   ├── ft_transcendence/          ✅ 3 張圖片
│   │   ├── webserv/                   ✅ 2 張圖片
│   │   ├── 03.jpg - 06.jpg            ⏳ Placeholder（待替換）
│   └── thumbs/                        ✅ 縮圖
│       ├── pong_thumb.jpg             ✅ 已優化
│       ├── webserv.jpg                ✅ 已優化
│       ├── cub3d.jpg                  ⏳ Placeholder
│       ├── minishell.jpg              ⏳ Placeholder
│       ├── inception.jpg              ⏳ Placeholder
│       └── philosophers.jpg           ⏳ Placeholder
├── LICENSE.txt                        ✅ HTML5 UP 授權
├── README.txt                         ✅ 模板說明
└── PROJECT_STATUS.md                  ✅ 本文檔
```

---

## 🎨 設計規範

### 顏色變數
```css
主背景：#F5F1E8    /* 奶油白 */
文字色：#4A4035    /* 深棕 */
主色調：#8B7355    /* 溫暖棕 */
懸停色：#A67C52    /* 淺棕 */
遮罩色：#28555e    /* 深青綠（Lightbox）*/
```

### 字體
- 標題：Source Sans Pro（無襯線）
- 內文：Source Sans Pro
- Bold 權重：700

### 間距
- 區塊間距：2em
- 按鈕 padding：0.75em 1.5em
- 卡片間距：1.5em

---

## 🔗 重要連結

- **GitHub Repository：** https://github.com/kaierhyeh/kaierhyeh.github.io
- **Live Site：** https://kaierhyeh.github.io
- **GitHub Profile：** https://github.com/kaierhyeh
- **LinkedIn：** https://linkedin.com/in/kaierhyeh
- **Email：** kaierhyeh@gmail.com

---

## 📝 開發筆記

### 今日完成（2025-12-10）
1. ✅ 頭像大小和裁切調整（9em + scale 1.3）
2. ✅ LinkedIn URL 修正
3. ✅ 語言切換功能實現（EN/FR）
4. ✅ 語言切換器移至右上角 + 國旗圖標
5. ✅ 移除固定換行符（響應式優化）
6. ✅ Webserv 專案圖片畫廊設定（2 張圖片）
7. ✅ Lightbox 遮罩顏色調整（#28555e）
8. ✅ **項目清理完成**
   - 刪除 8 個多餘檔案（舊文檔、備份、placeholder）
   - 移除 HTML 內聯樣式，整合到 CSS
   - 移除 CSS 連結版本號
   - 創建整合的 PROJECT_STATUS.md
9. ✅ **代碼優化**
   - 自訂 thumbnail hover 樣式移至 main.css
   - 清理未使用的 br 相關 CSS 規則

### 技術債務
- ~~SASS 源碼未使用~~ → 保留以備未來修改
- ~~部分 placeholder 圖片仍在使用~~ → 正常（等待真實截圖）
- ~~舊版 thumbnail 圖片未清理~~ → ✅ 已清理完成

### 待解決問題
- Formspree Form ID 尚未設定（需註冊）
- 4 個專案缺少真實截圖（cub3D, Minishell, Inception, Philosophers）

---

## 📞 聯絡資訊

如有問題或需要協助，請聯絡：
- **Email：** kaierhyeh@gmail.com
- **GitHub：** @kaierhyeh

---

**版本：** v1.0  
**狀態：** 開發中 (85% 完成)  
**預計完成：** 待專案截圖收集完成後即可部署

---

## 📊 完成度統計

- **核心功能：** 100% ✅
- **設計優化：** 100% ✅
- **語言功能：** 100% ✅
- **代碼清理：** 100% ✅
- **專案圖片：** 33% ⏳ (2/6 完成)
- **表單設定：** 0% ⏳ (待註冊 Formspree)
- **部署準備：** 90% ✅

**總體完成度：** 85%
