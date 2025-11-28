# 🎨 個人作品集網站 - 完成指南

## ✅ 已完成的優化

### 1. **個人化內容**
- ✅ 自我介紹基於你的 42 學生背景
- ✅ 展現系統程式設計與全端開發專長
- ✅ 強調從底層建構系統的能力

### 2. **專案展示**
已填入你的 6 個主要 42 專案：
- **ft_transcendence** - 即時多人 Pong 遊戲
- **Webserv** - C++ HTTP 伺服器
- **Inception** - Docker 容器化基礎架構
- **cub3D** - 3D 射線投射遊戲引擎
- **Minishell** - Unix Shell 實作
- **Philosophers** - 多執行緒同步問題

### 3. **溫暖棕色調設計**
- ✅ 奶油色背景 `#F5F1E8`
- ✅ 深棕色文字 `#4A4035`
- ✅ 溫暖棕色強調 `#8B7355`
- ✅ 懸停效果使用淺棕色 `#A67C52`

### 4. **互動優化**
- ✅ 專案卡片懸停放大效果
- ✅ 平滑滾動導航
- ✅ 按鈕懸停陰影效果
- ✅ 標題底部裝飾線

---

## 📋 待完成事項

### 🔴 必須完成（網站才能正常顯示）

#### 1. **替換個人資訊**
打開 `index.html` 並替換以下標記：

```html
<!-- Line 8: 網站標題 -->
<title>Your Name | Software Engineer @ 42</title>

<!-- Line 19: 側邊欄名字 -->
<h1><strong>I'm a Software Engineer</strong><br />

<!-- Line 96: 地點 -->
Paris, France<br />
(or your location)

<!-- Line 101: Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Line 106: GitHub -->
<a href="https://github.com/alex81131" target="_blank">github.com/alex81131</a>

<!-- Line 111: LinkedIn -->
<a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a>

<!-- Line 126: Footer 姓名 -->
<li>&copy; 2025 Your Name</li>
```

#### 2. **添加專案截圖**
需要為每個專案添加 600x400 px 的截圖到 `images/thumbs/`：

```bash
cd images/thumbs/

# 方式 1: 使用真實專案截圖
cp /path/to/your/screenshot.png transcendence.jpg

# 方式 2: 臨時使用 placeholder（開發測試用）
wget "https://via.placeholder.com/600x400/8B7355/F5F1E8?text=ft_transcendence" -O transcendence.jpg
wget "https://via.placeholder.com/600x400/8B7355/F5F1E8?text=Webserv" -O webserv.jpg
wget "https://via.placeholder.com/600x400/8B7355/F5F1E8?text=Inception" -O inception.jpg
wget "https://via.placeholder.com/600x400/8B7355/F5F1E8?text=cub3D" -O cub3d.jpg
wget "https://via.placeholder.com/600x400/8B7355/F5F1E8?text=Minishell" -O minishell.jpg
wget "https://via.placeholder.com/600x400/8B7355/F5F1E8?text=Philosophers" -O philosophers.jpg
```

詳細指南請見：`PROJECT_IMAGES_TODO.md`

#### 3. **設定聯絡表單**
目前使用 Formspree（免費表單服務）：

1. 前往 https://formspree.io/
2. 註冊並創建新表單
3. 獲取你的 Form ID
4. 在 `index.html` Line 88 替換：
```html
<form method="post" action="https://formspree.io/f/YOUR_FORM_ID">
```

**替代方案：**
- 使用 Netlify Forms（如果部署到 Netlify）
- 使用 Google Forms
- 或直接移除表單，只保留聯絡資訊

#### 4. **更換大頭照**
替換 `images/avatar.jpg` 為你的照片：
- 建議尺寸：400x400 px
- 格式：JPG 或 PNG
- 風格：專業形象照或簡約風格照片

---

### 🟡 建議完成（提升專業度）

#### 5. **調整專案描述**
如果想更詳細描述你的專案，編輯 `index.html` 中的 `<p>` 標籤：
- 加入專案亮點
- 提到克服的技術挑戰
- 加入量化成果（如性能數據）

#### 6. **添加其他 42 專案**
你還有這些專案可以展示：
- miniRT（3D 光線追蹤）
- pipex（管道程式）
- push_swap（排序演算法）
- FdF（線框圖）
- Born2beRoot（系統管理）

可以新增更多 `<article>` 區塊到 `#two` section。

#### 7. **添加技能標籤區塊**
在 `#one` 和 `#two` 之間可以加入技能展示：

```html
<section id="skills">
    <h2>Technical Skills</h2>
    <div class="row">
        <div class="col-6 col-12-small">
            <h3>Languages</h3>
            <ul>
                <li>C / C++98/11</li>
                <li>TypeScript / JavaScript</li>
                <li>Python</li>
                <li>Shell Script</li>
            </ul>
        </div>
        <div class="col-6 col-12-small">
            <h3>Technologies</h3>
            <ul>
                <li>Docker / Docker Compose</li>
                <li>NestJS / React</li>
                <li>PostgreSQL / MariaDB</li>
                <li>Nginx / HTTP</li>
            </ul>
        </div>
    </div>
</section>
```

---

## 🚀 測試與部署

### 本地測試
```bash
cd /home/kyeh/zgit/portfolio
python3 -m http.server 8001
# 開啟 http://localhost:8001
```

### 檢查清單
- [ ] 所有個人資訊已替換
- [ ] 專案截圖已添加
- [ ] 聯絡表單已設定
- [ ] 大頭照已替換
- [ ] 連結都可以點擊
- [ ] 在手機上測試響應式設計
- [ ] 檢查所有文字無拼寫錯誤

### 部署到 GitHub Pages
```bash
# 1. 確認專案在 Git 管理下
git init
git add .
git commit -m "Initial portfolio site"

# 2. 推送到 GitHub
git remote add origin git@github.com:alex81131/portfolio.git
git branch -M main
git push -u origin main

# 3. 在 GitHub 設定 Pages
# Settings → Pages → Source: main branch → Save
# 你的網站將發布在：https://alex81131.github.io/portfolio/
```

---

## 🎨 進階客製化

### 調整顏色
如果想微調棕色色調，編輯 `assets/css/main.css`：
- Line 86: 背景色
- Line 101: 文字色
- Line 114: 連結色
- Line 2520: 按鈕色

### 更改字體
目前使用 Source Sans Pro，如果想換字體：
1. 前往 Google Fonts 選擇字體
2. 在 `main.css` Line 2 替換 `@import` 網址
3. 在 Line 103 更新 `font-family`

### 添加動畫
可以在 CSS 中添加更多動畫效果，參考已有的：
- `.work-item:hover` - 卡片懸停
- `.work-item:hover .image img` - 圖片放大

---

## 💡 基於你的性格特質

從我們的對話中，我了解到你：

1. **重視結構與系統化** → 網站採用清晰的區塊劃分
2. **注重細節但不過度複雜** → 簡約設計，專注內容
3. **偏好溫暖親近感** → 棕色調而非冷酷科技藍
4. **實用主義** → Strata 而非華麗的 Dimension
5. **技術深度** → 展示低階系統程式設計專案

這個作品集反映了：
- 專業但不冷漠
- 技術但易於理解  
- 簡約但不簡陋
- 現代但不流行至上

---

## 📞 需要幫助？

如果在完成這些步驟時遇到問題：
1. 檢查瀏覽器開發者工具（F12）的 Console
2. 確認檔案路徑正確（大小寫敏感）
3. 清除瀏覽器快取重新載入

記得：**內容 > 形式**。先完成基本資訊填寫，再慢慢優化視覺效果！

---

**祝你求職／實習順利！** 🚀

如果你未來想要：
- 添加部落格區塊
- 整合 Google Analytics
- 添加多語言支援
- 改用其他框架（Next.js, Astro）

隨時可以繼續優化這個基礎！
