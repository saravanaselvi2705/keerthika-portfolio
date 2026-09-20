import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const heroMockupsDir = path.join(process.cwd(), "public/images/hero-mockups")
    const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".avif"])

    const formatTitle = (filename: string) => {
      const baseName = path.parse(filename).name
      return baseName
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    }

    const images: { src: string; alt: string }[] = []

    if (fs.existsSync(heroMockupsDir)) {
      const files = fs.readdirSync(heroMockupsDir)
      // Sort files alphabetically so the sequence is predictable
      files.sort().forEach((file) => {
        const ext = path.extname(file).toLowerCase()
        if (imageExtensions.has(ext)) {
          images.push({
            src: `/images/hero-mockups/${file}`,
            alt: formatTitle(file),
          })
        }
      })
    }

    return NextResponse.json(images)
  } catch {
    return NextResponse.json([], { status: 500 })
  }
}
