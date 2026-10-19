# 🎯 Portfolio 專案進度總覽

**專案名稱：** Kai-Erh (Alex) YEH - 個人作品集網站  
**網址：** https://kaierhyeh.github.io  
**最後更新：** 2026-10-19

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
- ✅ École 42 與跨領域背景介紹（環境工程、天體物理、AI 與資安）
- ✅ 專案列表（共 9 個精選專案）

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
- ✅ **雙語支援**：英文 (EN) + 法文 (FR)
- ✅ **固定位置**：右上角浮動按鈕
- ✅ **國旗圖標**：🇬🇧 EN | 🇫🇷 FR
- ✅ **LocalStorage**：記住用戶語言選擇
- ✅ **完整翻譯**：
  - Header 介紹
  - 關於我的內容（3 段）
  - 所有 9 個專案描述
  - 聯絡表單與按鈕文字

### 4. 專案圖片與影片畫廊（Custom Lightbox）
- ✅ **自訂全域 Lightbox (`#custom-modal`)**
  - 同時支援高畫質圖片 (`<img>`) 與自動播放影片 (`<video>`)
  - 支援鍵盤左右方向鍵 (`ArrowLeft` / `ArrowRight`) 與 `Escape` 關閉
  - 單張媒體自動隱藏左右切換箭頭，多張媒體顯示頁數計數器
  - 遮罩顏色：`rgba(40, 85, 94, 0.88)`（深青綠色）
- ✅ **所有 9 個專案媒體皆已完備**：
  | 專案 | 狀態 | 媒體內容 | 備註 |
  |------|------|---------|------|
  | **Gomoku** | ✅ 完成 | 1 張圖片 | `demo1.jpg`（實機對局與 AI 計時診斷） |
  | **Travel Planner** | ✅ 完成 | 1 部影片 + 2 張圖片 | `Travel planner.mp4`, `title.jpg`, `plan.jpg` |
  | **N-Puzzle Solver** | ✅ 完成 | 1 部影片 + 1 張圖片 | `npuzzle.mp4`, `terminal.jpg` |
  | **Pong Game** | ✅ 完成 | 3 張圖片 | `pong.png`, `pong_tournament.png`, `pong_chat.png` |
  | **HTTP Server** | ✅ 完成 | 2 張圖片 | `index.jpg`, `form.jpg` |
  | **cub3D** | ✅ 完成 | 2 張圖片 | `index.jpg`, `1.jpg` |
  | **Minishell** | ✅ 完成 | 2 張圖片 | `index.jpg`, `1.jpg` |
  | **Inception** | ✅ 完成 | 2 張圖片 | `index.jpg`, `1.png` |
  | **Philosophers** | ✅ 完成 | 2 張圖片 | `index.jpg`, `1.jpg` |

### 5. 視覺優化
- ✅ 縮圖尺寸統一與裁切優化
- ✅ 圖片 hover 效果
- ✅ CSS 清理（移除多餘內聯樣式與 br 隱藏規則）

---

## 📋 待辦事項

### 高優先級
- [ ] **Formspree 表單設定**
  - [ ] 註冊 Formspree 帳號並獲取 Form ID
  - [ ] 替換 `index.html` 中的 `YOUR_FORM_ID`
  - [ ] 測試表單發送功能

- [ ] **部署到 GitHub Pages**
  - [ ] 推送最新變更到 `kaierhyeh.github.io` 倉庫
  - [ ] 測試線上版本圖片與影片載入

### 中優先級
- [ ] **SEO 優化**
  - [ ] 添加 Open Graph 標籤 (`og:title`, `og:description`, `og:image`)
  - [ ] 生成 `sitemap.xml` 與 `robots.txt`

- [ ] **性能優化**
  - [ ] 壓縮大尺寸圖片與影片
  - [ ] 清理未使用的舊檔案（如 `media/fulls/npuzzle/video.html`、`video_fragment.html` 及 `Zone.Identifier`）

### 低優先級
- [ ] **擴展功能**（可選）
  - [ ] 添加更多語言（如中文、德文）
  - [ ] 添加深色模式或專案分類篩選

---

## 🚀 部署檢查清單

### 部署前確認
- [x] 所有專案縮圖與畫廊媒體已上傳（9/9 完成）
- [ ] Formspree Form ID 已設定
- [x] 測試所有 GitHub 專案連結
- [x] 測試英法雙語切換
- [x] 測試圖片與影片 Lightbox 畫廊

---

## 📁 專案結構

```
/home/kyeh/portfolio/
├── index.html                          ✅ 主頁面（含 9 個專案與自訂 Lightbox）
├── assets/
│   ├── css/
│   │   ├── main.css                    ✅ 棕色主題樣式
│   │   ├── fontawesome-all.min.css     ✅ FontAwesome 圖標
│   │   └── images/overlay.png          ✅ 背景紋理
│   ├── js/
│   │   ├── main.js                     ✅ 主腳本
│   │   ├── language-switcher.js        ✅ 雙語切換功能（EN/FR）
│   │   ├── jquery.min.js               ✅ jQuery
│   │   ├── jquery.poptrox.min.js       ✅ Poptrox 插件
│   │   ├── browser.min.js              ✅ 瀏覽器檢測
│   │   ├── breakpoints.min.js          ✅ 響應式斷點
│   │   └── util.js                     ✅ 工具函數
│   ├── sass/                           ⚠️ SASS 源碼（備用）
│   └── webfonts/                       ✅ FontAwesome 字體
├── media/
│   ├── bg.jpg                          ✅ Header 背景
│   ├── photo de 42.jpg                 ✅ 個人頭像
│   ├── fulls/                          ✅ Lightbox 完整媒體（圖片 + 影片）
│   │   ├── gomoku/                     ✅ 1 張圖片 (demo1.jpg)
│   │   ├── travel_planner/             ✅ 1 部影片 + 2 張圖片
│   │   ├── npuzzle/                    ✅ 1 部影片 + 1 張圖片
│   │   ├── ft_transcendence/           ✅ 3 張圖片
│   │   ├── webserv/                    ✅ 2 張圖片
│   │   ├── cub3D/                      ✅ 2 張圖片
│   │   ├── minishell/                  ✅ 2 張圖片
│   │   ├── inception/                  ✅ 2 張圖片
│   │   └── philo/                      ✅ 2 張圖片
│   └── thumbs/                         ✅ 9 個專案縮圖
│       ├── gomoku.jpg
│       ├── travel_planner.jpg
│       ├── npuzzle.png
│       ├── pong_thumb.jpg
│       ├── webserv.jpg
│       ├── cub3D.jpg
│       ├── minishell.jpg
│       ├── inception.jpg
│       └── philo.jpg
├── LICENSE.txt                         ✅ HTML5 UP CCA 3.0 授權
└── README.md                           ✅ 本進度文檔

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
- 標題與內文：Source Sans Pro（無襯線，Bold 權重 700）

---

## 🔗 重要連結

- **GitHub Repository：** https://github.com/kaierhyeh/kaierhyeh.github.io
- **Live Site：** https://kaierhyeh.github.io
- **GitHub Profile：** https://github.com/kaierhyeh
- **LinkedIn：** https://www.linkedin.com/in/kaierhyeh/
- **Email：** kaierhyeh@gmail.com

---

## 📝 開發筆記

### 2026-10-19 更新
1. ✅ **新增 Gomoku 專案展示**
   - 加入 `Gomoku` 專案卡片（連結至 `https://github.com/kaierhyeh/Gomoku`）
   - 撰寫英/法雙語專案介紹（Minimax + Alpha-Beta 剪枝、`<0.5s/move`、PvP/PvE 與額外遊戲模式）
   - 配置 `media/thumbs/gomoku.jpg` 與 `media/fulls/gomoku/demo1.jpg` Lightbox 畫廊
2. ✅ **同步更新進度文檔 (`PROJECT_STATUS.md`)**
   - 補齊先前新增的 **Travel Planner**、**N-Puzzle Solver** 以及 **cub3D**、**Minishell**、**Inception**、**Philosophers** 實機截圖與自訂影片 Lightbox 紀錄

### 歷史更新（2025-12-10）
1. ✅ 頭像大小和裁切調整（9em + scale 1.3）
2. ✅ LinkedIn URL 修正與英法雙語切換器實現（右上角國旗按鈕）
3. ✅ 響應式優化、Webserv 畫廊設定、Lightbox 遮罩顏色調整（`#28555e`）
4. ✅ 項目清理與 CSS 樣式整合

---

## 📊 完成度統計

- **核心功能：** 100% ✅
- **設計優化：** 100% ✅
- **語言功能：** 100% ✅
- **代碼清理：** 100% ✅
- **專案圖片/影片：** 100% ✅ (9/9 完成)
- **表單設定：** 0% ⏳ (待註冊 Formspree)
- **部署準備：** 95% ✅

**總體完成度：** 95%
<br/>
<br/>
<br/>
<br/>
Template: Strata by HTML5 UP html5up.net | @ajlkn Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)