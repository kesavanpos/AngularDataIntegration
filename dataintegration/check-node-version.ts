const { execSync } = require('child_process');

const requiredNodeVersion = '12.11.1'; // Change this to your required version

// Check if nvm is installed
let nvmInstalled = false;
try {
  execSync('nvm --version');
  nvmInstalled = true;
} catch (error) {
  console.log('nvm is not installed. Installing nvm...');

  try {
    // Install nvm
    execSync(
      'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash',
      { stdio: 'inherit' }
    );
    console.log('nvm installed successfully.');
    nvmInstalled = true;
  } catch (error) {
    console.error('Error installing nvm:', error);
    process.exit(1);
  }
}

// If nvm is installed, proceed with checking Node.js version
if (nvmInstalled) {
  // Check if current node version is compatible
  const currentNodeVersion = process.version;
  if (currentNodeVersion !== requiredNodeVersion) {
    console.log(
      `Current Node.js version (${currentNodeVersion}) is not compatible. Installing required version (${requiredNodeVersion})...`
    );

    try {
      execSync(`nvm install ${requiredNodeVersion}`, { stdio: 'inherit' });
      console.log(
        `Node.js version ${requiredNodeVersion} installed successfully.`
      );
    } catch (error) {
      console.error(
        `Error installing Node.js version ${requiredNodeVersion}:`,
        error
      );
      process.exit(1);
    }
  } else {
    console.log(`Node.js version ${requiredNodeVersion} is already installed.`);
  }
}
