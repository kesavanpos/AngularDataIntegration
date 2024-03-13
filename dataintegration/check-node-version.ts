import { execSync } from 'child_process';

const requiredNodeVersion = '12.11.1'; // Change this to your required version

// Function to check if nvm is installed
function isNvmInstalled() {
  try {
    execSync('nvm --version');
    return true;
  } catch (error) {
    return false;
  }
}

// Function to install nvm
function installNvm() {
  console.log('nvm is not installed. Installing nvm...');

  try {
    execSync(
      'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash',
      { stdio: 'inherit' }
    );
    console.log('nvm installed successfully.');
    return true;
  } catch (error) {
    console.error('Error installing nvm:', error);
    process.exit(1);
  }
}

// Check if nvm is installed
if (!isNvmInstalled() && installNvm()) {
  // Reload shell to enable nvm
  execSync('. ~/.nvm/nvm.sh', { stdio: 'inherit' });
}

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
