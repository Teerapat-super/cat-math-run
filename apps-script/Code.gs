/**
 * CAT MATH RUN: วิ่งเก็บเหรียญ พิชิตโจทย์คณิต
 * Google Apps Script Web App – ไฟล์ฝั่งเซิร์ฟเวอร์
 *
 * หน้าที่ของไฟล์นี้มีเพียงอย่างเดียว คือส่งหน้าเว็บ Index.html ให้เบราว์เซอร์
 * ระบบเกมทั้งหมด (โจทย์ เวลา คะแนน หัวใจ แอนิเมชัน) ทำงานฝั่งเบราว์เซอร์ใน Index.html
 * จึงไม่ต้องใช้ฐานข้อมูล ไม่ต้องเข้าสู่ระบบ และไม่มีการเรียกเซิร์ฟเวอร์ระหว่างเล่น
 */
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('CAT MATH RUN: วิ่งเก็บเหรียญ พิชิตโจทย์คณิต')
    // HtmlService ไม่อ่าน <meta name="viewport"> ในไฟล์ HTML ต้องกำหนดผ่าน addMetaTag เท่านั้น
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover')
    // อนุญาตให้ฝังเกมใน Google Sites หรือเว็บโรงเรียนได้
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
