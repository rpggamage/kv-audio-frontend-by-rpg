import { createClient } from "@supabase/supabase-js";
const anon_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Y25xZGl0ZnJuaHRkenlkc3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwOTEzOTIsImV4cCI6MjA2MDY2NzM5Mn0.5hXZ-BZO_UzLbwqUuxvSC9_Ywr_bKQHFAYDUQERr03Y";
const suparbase_url = "https://mtcnqditfrnhtdzydspw.supabase.co";

const suparbase = createClient(suparbase_url, anon_key);

export default function mediaUpload(file) {
  return new Promise((resolve, reject) => {
    if (file == null) {
      reject("No file selected");
    }
    const timestamp = new Date().getTime();
    const fileName = timestamp + file.name;

    return suparbase.storage
      .from("kv-images")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      })
      .then((res) => {
        const publicUrl = suparbase.storage
          .from("kv-images")
          .getPublicUrl(fileName).data.publicUrl;
        resolve(publicUrl);
      })
      .catch((err) => reject("Error uploading file"));
  });
}
