# ☕ POS Quán Cafe 206

Ứng dụng POS (Point of Sale) cho quán cafe, được đóng gói thành **Android APK** và **iOS IPA** sử dụng Capacitor.

---

## 📱 Tải APK mới nhất

👉 Vào tab **[Releases](../../releases)** để tải APK mới nhất

---

## 🚀 Build tự động (GitHub Actions)

### Trigger build:

| Sự kiện | Kết quả |
|---------|---------|
| Push lên `main` | Build APK Debug |
| Tạo tag `v1.0.0` | Build APK Release + IPA + Tạo Release |
| Bấm "Run workflow" | Build thủ công |

### Cách tạo Release:
```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## ⚙️ Cài đặt môi trường local

```bash
# 1. Cài Node.js dependencies
npm install

# 2. Thêm platform Android
npx cap add android

# 3. Sync code
npx cap sync android

# 4. Mở Android Studio (cần cài Android Studio)
npx cap open android
```

---

## 🔐 GitHub Secrets cần thiết

Vào **Settings → Secrets → Actions** và thêm:

### Cho Android Release:
| Secret | Mô tả |
|--------|-------|
| `ANDROID_KEYSTORE_BASE64` | Keystore encode base64: `base64 -i cafe.keystore` |
| `KEYSTORE_PASSWORD` | Mật khẩu keystore |
| `KEY_ALIAS` | Alias của key |
| `KEY_PASSWORD` | Mật khẩu key |

### Tạo Keystore (chạy 1 lần):
```bash
keytool -genkey -v \
  -keystore cafe-pos.keystore \
  -alias cafe-pos \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -storepass YOUR_PASSWORD \
  -keypass YOUR_PASSWORD \
  -dname "CN=Cafe POS, OU=Mobile, O=Cafe206, L=HCM, S=HCM, C=VN"

# Encode thành base64:
base64 -i cafe-pos.keystore | pbcopy   # macOS (copy vào clipboard)
base64 -w 0 cafe-pos.keystore          # Linux
```

### Cho iOS Release (cần Apple Developer Account $99/năm):
| Secret | Mô tả |
|--------|-------|
| `IOS_CERTIFICATE_BASE64` | Certificate .p12 encode base64 |
| `IOS_CERTIFICATE_PASSWORD` | Mật khẩu certificate |
| `IOS_PROVISION_PROFILE_BASE64` | Provisioning profile encode base64 |

---

## 🎨 Icon ứng dụng

Icon được tạo tự động trong thư mục `resources/`:
- `icon.png` — 1024×1024 (master)
- `icon-512.png` — 512×512
- `icon-192.png` — 192×192

Android icons trong `android/app/src/main/res/mipmap-*/`

---

## 📂 Cấu trúc project

```
cafe-pos-app/
├── .github/
│   └── workflows/
│       ├── build-android.yml    # Build APK
│       ├── build-ios.yml        # Build IPA  
│       └── build-all.yml        # Build cả hai + Release
├── www/
│   └── index.html               # App của bạn
├── resources/
│   └── icon.png                 # Icon gốc 1024px
├── android/                     # Android project
├── ios/                         # iOS project (sau khi cap add ios)
├── capacitor.config.ts          # Capacitor config
└── package.json
```

---

## 🛠️ Tính năng app

- 🪑 Quản lý bàn & đặt bàn
- ☕ Menu đồ uống
- 🛒 Giỏ hàng & Order
- 💰 Thu ngân
- 🖨️ In hóa đơn nhiệt Bluetooth
- 📊 Báo cáo doanh thu
- 🔥 Đồng bộ Firebase realtime
- 🌙 Dark mode Retro

---

## ❓ Hỗ trợ

Nếu build lỗi, kiểm tra:
1. Gradle version ≥ 8.0
2. Java 17
3. Node.js 20+
4. Android SDK 34
