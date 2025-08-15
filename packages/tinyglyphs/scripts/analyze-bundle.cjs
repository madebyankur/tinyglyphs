const fs = require("fs");
const path = require("path");

function analyzeBundle() {
  const distDir = path.join(__dirname, "../dist");

  if (!fs.existsSync(distDir)) {
    console.error('❌ Build directory not found. Run "pnpm build" first.');
    process.exit(1);
  }

  const files = fs.readdirSync(distDir);
  const stats = [];

  files.forEach((file) => {
    const filePath = path.join(distDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      const sizeInKB = (stat.size / 1024).toFixed(2);
      stats.push({
        file,
        size: stat.size,
        sizeKB: sizeInKB,
      });
    }
  });

  // Sort by size, largest first
  stats.sort((a, b) => b.size - a.size);

  console.log("\n📦 Bundle Analysis\n");
  console.log("File".padEnd(25) + "Size".padStart(10));
  console.log("-".repeat(37));

  let totalSize = 0;
  stats.forEach(({ file, sizeKB }) => {
    console.log(file.padEnd(25) + `${sizeKB} KB`.padStart(10));
    totalSize += parseFloat(sizeKB);
  });

  console.log("-".repeat(37));
  console.log("Total".padEnd(25) + `${totalSize.toFixed(2)} KB`.padStart(10));
  console.log();

  // Check for optimal sizes
  const mainFiles = stats.filter((s) =>
    ["react.mjs", "vue.mjs", "svelte.mjs", "angular.mjs"].includes(s.file)
  );

  if (mainFiles.length > 0) {
    const avgSize =
      mainFiles.reduce((sum, f) => sum + parseFloat(f.sizeKB), 0) /
      mainFiles.length;
    console.log(`📊 Average framework bundle size: ${avgSize.toFixed(2)} KB`);

    if (avgSize > 50) {
      console.log(
        "⚠️  Bundle size is larger than expected. Consider optimizing."
      );
    } else if (avgSize < 20) {
      console.log("✅ Bundle size looks good!");
    } else {
      console.log("📈 Bundle size is reasonable.");
    }
  }

  console.log();
}

analyzeBundle();
