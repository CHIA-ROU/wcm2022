var tipuesearch = {"pages": [{'title': 'About', 'text': 'wcm2022 \n 四設計一甲 410231104 呂佳柔 \n 下學期選課 網際內容管理 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Online', 'text': '', 'tags': '', 'url': 'Online.html'}, {'title': 'w13', 'text': '2022/5/20 \n 在個人動態與靜態網頁中配置 Brython 程式環境, 並啟動執行線上程式 \n 執行結果 \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'Midterm Exam', 'text': '題目1.如何設定nginx，讓其中所伺服的檔案只允許系上電腦下載。 \n 解答: \n \n 學校電腦網頁輸入 wcm.cycu.org:88 \n 下載 nginx-1.20.2.zip 並解壓縮 \n nginx資料夾中拉出 nginx.cof \n 輸入\xa0\n \n \n save \n 管理員身分執行nginx \n cmd輸入ipconfig \n 複製IPv6位址，在網頁中貼上網址，前後加上[]，最後: \n 網站顯示  Welcome to nginx! \n \n 題目2.如何利用gpg4win查驗所下載的 nfginx檔案與官方網站所附的數位簽章吻合。 \n 解答 \n', 'tags': '', 'url': 'Midterm Exam.html'}, {'title': 'midterm', 'text': '\n \n \n   \n \n \n \n \n \n 如何在網頁放上wink影片? \n 1. 下載轉檔程式ffmpeg.exe \n 2. 將影片存至downloads下 \n 3. wink中按 render 匯出轉檔 \n 4. 到 https://mde.tw/wcm2022_guide/content/PME.html  下載w4_diff_note.txt \n 5. 於網頁程式碼中貼上/downloads/winkvideo \n 6. 程式碼中winkVideoData後的項目數字需相同 \n 7.\xa0"/downloads/ w8_project 1.mp4 "改成正確檔案名稱 \n 8. save \n', 'tags': '', 'url': 'midterm.html'}, {'title': 'cadlab server', 'text': '2022/5/13 \n 1. 利用cadlab中沒有啟動還原保護的電腦磁區練習安裝server利用 \n 2. 利用ping指令，測試是否可以經由NAT連線到系上網路連外的C:\\Users\\cadlab>ping -t 140.130.17.254 \n 3. 找到組別對應主機7-3(wcmg5)- 192.168.1.173 \n 4. 網路連線>乙太網路>內容>IPv4>IP位址更改為\xa0 192.168.1.173>DNS伺服器位址 168.95.1.1 \n 5. 確定電腦可以連外後，到網址 wcm.cycu.org:88上下載設定網際內容管理伺服器所需要的程式檔案 可攜系統portable_python_wcm2022和nginx-1.20.2 \n 6. 搜尋Nssm，進入網站Download下載nssm 2.24(64-bit)，為了將之後設定的伺服器能轉為電腦操作系統對應的服務 \n 7. 三個下載的程式檔案分別解壓縮至 C槽>使用者>cadlab>wcm2022ag5(組別對應目錄) \n 8. 打開cmd，以系統管理員身分執行nssm將nginx內建轉為操作系統中的service \n 9. C:\\Users\\cadlab\\wcm2022ag5>nssm install nginx \n 10. 執行後跳出nginx服務設定表單的視窗，路徑Path填入執行路徑\xa0 Users\\cadlab\\wcm2022ag5\\nginx- 1.20.2\\nginx.exe \n 11. Service name輸入nginx，確認後按下Install service \n 12. Win10開始>電腦管理>服務與應用程式>開啟nginx服務>確認顯示"執行中" \n 13. 網頁輸入\xa0192.168.1.173，利用瀏覽器連接，顯示出內建設定， Welcome to nginx! \n', 'tags': '', 'url': 'cadlab server.html'}, {'title': 'Tetris 線上遊戲專案報告', 'text': '<h2>w13</h2> \n \xa0 <!--  導入  brython  程式庫  --> \n <script src="./../cmsimde/static/brython.js"></script> \n <script src="./../cmsimde/static/brython_stdlib.js"></script> \n # 將cmsimde> static>brython.js和brython_stdlib.js(brython主程式及標準程式庫)導入。 \n \n <!--  啟動  Brython --> \n <script> \n window.onload=function(){brython();}  \n </script> \n #window.onload=function()使頁面加載完後立即執行{}裡的動作，即啟動Brython。 \n <div id="brython_div"></div> \n #html的標籤命名，程式產生的動態繪圖所放置的位置。 \n \n <script type="text/python">  \n 1 \n 2 \n 3 \n ... \n #編寫python的環境 \n </script> \n #python的標尾', 'tags': '', 'url': 'Tetris 線上遊戲專案報告.html'}]};