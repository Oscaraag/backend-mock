const fs = require('fs-extra')
const path = require('path')

const srcDir = path.join(__dirname, 'src')
const distDir = path.join(__dirname, 'dist')

async function build() {
  try {
    // Comprueba si el directorio 'dist' existe, si es así, lo elimina.
    if (fs.existsSync(distDir)) {
      await fs.remove(distDir)
    }

    // Crea el directorio 'dist'
    await fs.mkdir(distDir)

    // Copia todos los archivos de 'src' a 'dist'
    await fs.copy(srcDir, distDir)

    console.log('Build completed successfully!')
  } catch (error) {
    console.error('Error during build:', error)
  }
}

build()
