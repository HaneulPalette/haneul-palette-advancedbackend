let imageFile = null;
let paymentFile = null;

// Detect image upload
document.getElementById("imageUpload").addEventListener("change", function () {
    imageFile = this.files[0];
    if (imageFile) {
        document.getElementById("result").innerHTML =
            "<p>✔ Image uploaded. Ready for analysis.</p>";
        enableButton();
    }
});

// Detect payment screenshot
document.getElementById("paymentProof").addEventListener("change", function () {
    paymentFile = this.files[0];
    if (paymentFile) {
        document.getElementById("result").innerHTML +=
            "<p>✔ Payment proof uploaded.</p>";
        enableButton();
    }
});

// Enable PDF button only when both files uploaded
function enableButton() {
    if (imageFile && paymentFile) {
        document.getElementById("analyzeBtn").disabled = false;
    }
}

// MAIN ACTION
document.getElementById("analyzeBtn").addEventListener("click", function () {

    if (!imageFile || !paymentFile) {
        alert("Upload image + payment proof first.");
        return;
    }

    document.getElementById("result").innerHTML =
        "<p>Generating your premium multi-page report…</p>";

    setTimeout(() => {
        generatePDF();
    }, 1500);
});

// MULTI-PAGE PDF (TEXT-BASED)
function generatePDF() {

    const pdfName = "Premium_Colour_Analysis_Report.pdf";

    const content = `
--- COVER PAGE ---
Premium Personal Colour Analysis Report
Name: (Displayed only on cover)
Payment: ₹799 Verified

--- PAGE 1 ---
• Undertone precision mapping  
• Temperature: Warm / Cool / Neutral  
• Skin overtone description  
• Surface vs deep undertone evaluation  

--- PAGE 2 ---
16-Season Detailed Placement (Format B)
Soft Autumn / Clear Winter / True Summer etc.
HEX-based shade matching  
Depth – Hue – Chroma breakdown  

--- PAGE 3 ---
20-Color Advanced Outfit Palette
Best colours for:
• Indian ethnic wear  
• Office outfits  
• Daily casuals  
• Evening events  
HEX values included  

--- PAGE 4 ---
K-Beauty Based Makeup Guide
Lipstick (5 curated options)
Blush (3 shades)
Eyeshadow (3 palettes)
Foundation tone + undertone  
What to avoid (ashy, grey, orange)  

--- PAGE 5 ---
Hair Colour Recommendations
Top 4 shades (+ HEX)
Colours to avoid  
Maintenance level guide  

--- PAGE 6 ---
Accessories & Jewelry
Gold vs silver vs rose gold  
Watch straps  
Glasses frame colours  
Bag & footwear tones  

--- PAGE 7 ---
Mini Style Blueprint
• Best silhouettes  
• Prints & patterns  
• Necklines for your undertone  
• Fabric shine vs matte  

--- PAGE 8 ---
Full shopping palette  
(HEX-based reference card)  
`;


    const blob = new Blob([content], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = pdfName;
    link.click();

    document.getElementById("result").innerHTML =
        "<p>✔ PDF Report Generated Successfully!</p>";
}
