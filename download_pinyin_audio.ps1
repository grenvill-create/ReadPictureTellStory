# Download all pinyin audio files from Baidu CDN
# Save as static MP3 files for local serving (avoids CORS issues in browser)

$outputDir = "public\audio\pinyin"

# All unique Chinese texts needed for the pinyin learning module
$audioMap = @{
    # Single characters - Initials (声母)
    "bo" = "波"
    "po" = "坡"
    "mo" = "摸"
    "fo" = "佛"
    "de" = "得"
    "te" = "特"
    "ne" = "讷"
    "le" = "勒"
    "ge" = "哥"
    "ke" = "科"
    "he" = "喝"
    "ji" = "鸡"
    "qi" = "七"
    "xi" = "西"
    "zhi" = "知"
    "chi" = "吃"
    "shi" = "狮"
    "ri" = "日"
    "zi" = "滋"
    "ci" = "疵"
    "si" = "丝"

    # Single characters - Simple vowels (单韵母)
    "a" = "啊"
    "o" = "喔"
    "e" = "鹅"
    "yi" = "衣"
    "wu" = "乌"
    "yu2" = "迂"

    # Compound finals (复韵母)
    "ai" = "挨"
    "ei" = "诶"
    "ui" = "危"
    "ao" = "熬"

    # Tones (四声调) - using ma tones
    "ma1" = "妈"
    "ma2" = "麻"
    "ma3" = "马"
    "ma4" = "骂"

    # Syllable results
    "ba1" = "八"
    "da3" = "打"
    "lu4" = "路"
    "yu_fish" = "鱼"

    # Example words (词语示范)
    "w_ayi" = "阿姨"
    "w_ooti" = "喔喔啼"
    "w_baie" = "白鹅"
    "w_yifu" = "衣服"
    "w_wugui" = "乌龟"
    "w_xiaoyu" = "小鱼"
    "w_bahe" = "拔河"
    "w_dagu" = "打鼓"
    "w_baba" = "爸爸"
    "w_piqiu" = "皮球"
    "w_mama" = "妈妈"
    "w_fengche" = "风车"
    "w_tuzi" = "兔子"
    "w_nihao" = "你好"
    "w_meihualu" = "梅花鹿"
    "w_shuziba" = "数字八"
    "w_dapiqiu" = "打皮球"

    # Feedback phrases (反馈语音)
    "fb_correct" = "答对啦！太棒了！"
    "fb_wrong" = "选错啦，再试一次吧！"
    "fb_pass" = "恭喜你，顺利通关！"
    "fb_tryagain" = "差一点点就通关了，再复习一下吧！"
}

$total = $audioMap.Count
$success = 0
$fail = 0
$i = 0

foreach ($entry in $audioMap.GetEnumerator()) {
    $i++
    $filename = $entry.Key
    $text = $entry.Value
    $encoded = [System.Uri]::EscapeDataString($text)
    $url = "https://fanyi.baidu.com/gettts?lan=zh&text=$encoded&spd=3&source=web"
    $outFile = Join-Path $outputDir "$filename.mp3"

    Write-Host "[$i/$total] Downloading '$text' -> $filename.mp3 ..."

    try {
        Invoke-WebRequest -Uri $url -OutFile $outFile -TimeoutSec 15 -UseBasicParsing -ErrorAction Stop
        $fileSize = (Get-Item $outFile).Length
        if ($fileSize -gt 1000) {
            Write-Host "  OK ($fileSize bytes)"
            $success++
        } else {
            Write-Host "  WARNING: File too small ($fileSize bytes), might be invalid"
            $fail++
        }
    } catch {
        Write-Host "  FAILED: $($_.Exception.Message)"
        $fail++
    }

    # Small delay to avoid rate limiting
    Start-Sleep -Milliseconds 200
}

Write-Host "`n=== Download Complete ==="
Write-Host "Success: $success / $total"
Write-Host "Failed: $fail / $total"
