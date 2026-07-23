$testUrls = @(
    "bo1", "po1", "mo1", "fo1",
    "de1", "te1", "ne1", "le1",
    "ge1", "ke1", "he1",
    "ji1", "qi1", "xi1",
    "zhi1", "chi1", "shi1", "ri1",
    "zi1", "ci1", "si1",
    "yi1", "wu1", "a1", "o1", "e1",
    "ai1", "ei1", "ui1", "ao1",
    "ma1", "ma2", "ma3", "ma4",
    "ba1", "da3", "lu4"
)

foreach ($key in $testUrls) {
    $url = "https://hanyu-word-pinyin.cdn.bcebos.com/$key.mp3"
    try {
        $response = Invoke-WebRequest -Uri $url -Method Head -UseBasicParsing -ErrorAction Stop
        Write-Host "✅ $key"
    } catch {
        Write-Host "❌ $key - $($_.Exception.Message)"
    }
}
