# Test secondary Baidu CDN response body
$url = "https://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=3&text=%E5%95%8A"
try {
    $response = Invoke-WebRequest -Uri $url -TimeoutSec 10 -UseBasicParsing -ErrorAction Stop
    Write-Host "Secondary Status: $($response.StatusCode)"
    Write-Host "Secondary Content-Type: $($response.Headers['Content-Type'])"
    Write-Host "Secondary Body: $($response.Content)"
} catch {
    Write-Host "Secondary FAILED: $($_.Exception.Message)"
}

Write-Host ""

# Test primary with GET (full download) to confirm audio is valid
$url2 = "https://fanyi.baidu.com/gettts?lan=zh&text=%E5%95%8A&spd=3&source=web"
try {
    $response2 = Invoke-WebRequest -Uri $url2 -TimeoutSec 10 -UseBasicParsing -ErrorAction Stop
    Write-Host "Primary Status: $($response2.StatusCode)"
    Write-Host "Primary Content-Type: $($response2.Headers['Content-Type'])"
    Write-Host "Primary Content bytes: $($response2.Content.Length)"
} catch {
    Write-Host "Primary FAILED: $($_.Exception.Message)"
}

Write-Host ""

# Test multiple pre-encoded texts
$testCases = @(
    @{Name="bo (wave)"; Encoded="%E6%B3%A2"},
    @{Name="po (slope)"; Encoded="%E5%9D%A1"},
    @{Name="mama"; Encoded="%E5%A6%88%E5%A6%88"},
    @{Name="da (hit)"; Encoded="%E6%89%93"},
    @{Name="lu (road)"; Encoded="%E8%B7%AF"}
)

foreach ($tc in $testCases) {
    $testUrl = "https://fanyi.baidu.com/gettts?lan=zh&text=$($tc.Encoded)&spd=3&source=web"
    try {
        $r = Invoke-WebRequest -Uri $testUrl -Method Head -TimeoutSec 10 -UseBasicParsing -ErrorAction Stop
        Write-Host "OK - $($tc.Name): Status=$($r.StatusCode), Type=$($r.Headers['Content-Type']), Size=$($r.Headers['Content-Length'])"
    } catch {
        Write-Host "FAIL - $($tc.Name): $($_.Exception.Message)"
    }
}
