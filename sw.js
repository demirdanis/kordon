self.addEventListener("fetch", (event) => {
  const url = event.request.url;
  console.log("url", url);
  // Her isteği logla
  if (url.includes("162.244.80.31")) {
    console.log("🎵 SW: Radyo isteği yakalandı!");
    console.log("📍 SW: URL:", url);
    console.log("🔧 SW: Method:", event.request.method);

    event.respondWith(
      fetch(event.request)
        .then((response) => {
          console.log("✅ SW: Başarılı yanıt:", response.status);
          console.log(
            "📦 SW: Content-Type:",
            response.headers.get("content-type")
          );
          return response;
        })
        .catch((error) => {
          console.error("❌ SW: Hata:", error.message);
          throw error;
        })
    );
  } else {
    console.log("🌐 SW: Normal istek geçti:", url);
  }
});
