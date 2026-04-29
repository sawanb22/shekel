$ProgressPreference = 'SilentlyContinue'

$assets = @(
  # Section 2
  @{ path = "public/section-2-connect-us/icon-whatsapp.svg"; url = "https://www.figma.com/api/mcp/asset/e2c44bf1-aab6-40d1-a292-e29af705f7fd" },
  @{ path = "public/section-2-connect-us/link-arrow.svg"; url = "https://www.figma.com/api/mcp/asset/721e7b93-961d-44df-8aa6-d53dd8672e6c" },
  @{ path = "public/section-2-connect-us/icon-email.svg"; url = "https://www.figma.com/api/mcp/asset/0663404d-31d1-48a9-aed6-893684cb8440" },
  @{ path = "public/section-2-connect-us/icon-social.svg"; url = "https://www.figma.com/api/mcp/asset/8898374a-abf0-4e87-ac5a-17dc366876e4" },

  # Section 3
  @{ path = "public/section-3-connect-us/chevron.svg"; url = "https://www.figma.com/api/mcp/asset/5e19cb3d-4112-41bd-98ca-549cae1ef1a6" },
  @{ path = "public/section-3-connect-us/icon-response.svg"; url = "https://www.figma.com/api/mcp/asset/f29326f2-fdc7-4a82-9aca-421ee0f4aa7e" },
  @{ path = "public/section-3-connect-us/icon-clock.svg"; url = "https://www.figma.com/api/mcp/asset/9c92f9f0-d419-41bf-827d-3bd1f0e80944" },
  @{ path = "public/section-3-connect-us/social-1.svg"; url = "https://www.figma.com/api/mcp/asset/84e208e8-bad2-4e00-a980-485b98b37d37" },
  @{ path = "public/section-3-connect-us/social-2.svg"; url = "https://www.figma.com/api/mcp/asset/508399fe-164d-4f64-a880-4e4f02bb2648" },
  @{ path = "public/section-3-connect-us/social-3.svg"; url = "https://www.figma.com/api/mcp/asset/c49ae6f8-9b13-42b9-bbe7-cdf18395d3a7" },
  @{ path = "public/section-3-connect-us/arrow-right.svg"; url = "https://www.figma.com/api/mcp/asset/46e29bb3-20c3-4c15-a81c-9428fe904fc0" },

  # Section 4 & 5
  @{ path = "public/section-4-connect-us/arrow-up-right.svg"; url = "https://www.figma.com/api/mcp/asset/4b8279cc-1547-4c3d-b99f-54d3c8d23cb0" },
  @{ path = "public/section-4-connect-us/icon-copygenius.svg"; url = "https://www.figma.com/api/mcp/asset/74c59b9c-26d8-4f61-a76c-21da182be6b7" },
  @{ path = "public/section-4-connect-us/icon-star.svg"; url = "https://www.figma.com/api/mcp/asset/72424614-df39-4c19-8f9e-dce8bdaa835c" },
  @{ path = "public/section-4-connect-us/icon-videocraft.svg"; url = "https://www.figma.com/api/mcp/asset/25beb938-e6fa-4f8e-b28a-61a8ac1d2406" },
  @{ path = "public/section-4-connect-us/icon-metricmaster.svg"; url = "https://www.figma.com/api/mcp/asset/8b1edc7c-ddf7-41d8-a594-94370086a0e2" }
)

foreach ($asset in $assets) {
  $dir = Split-Path $asset.path -Parent
  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
  }
  Write-Host "Downloading $($asset.path)..."
  Invoke-WebRequest -Uri $asset.url -OutFile $asset.path
}
Write-Host "All assets downloaded successfully."