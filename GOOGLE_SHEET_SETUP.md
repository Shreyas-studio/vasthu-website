# Send form submissions to Google Sheets

1. **Create a Google Sheet**  
   - [sheets.new](https://sheets.new)  
   - Add a header row in row 1: `Timestamp` | `Name` | `Email` | `Phone` | `Units` | `Source`

2. **Add the script**  
   - In the sheet: **Extensions** → **Apps Script**  
   - Replace the default code with:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var params = e.parameter;
    sheet.appendRow([
      new Date(),
      params.name || '',
      params.email || '',
      params.phone || '',
      params.units || '',
      params.source || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Deploy as web app**  
   - **Deploy** → **New deployment**  
   - Type: **Web app**  
   - Description: e.g. `Form submit`  
   - **Execute as**: Me  
   - **Who has access**: Anyone  
   - **Deploy**  
   - Copy the **Web app URL**

4. **Use the URL in the project**  
   - Open `constants.tsx`  
   - Set `FORM_SUBMIT_URL` to the copied URL, e.g.  
     `export const FORM_SUBMIT_URL = 'https://script.google.com/macros/s/XXXX/exec';`

Submissions from **Contact**, **Popup**, and **Floor plan brochure** forms will append a row to your sheet with timestamp, name, email, phone, units, and source (`contact` / `popup` / `brochure`).
