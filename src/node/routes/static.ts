import { Router, static as createStaticRouteHandler } from "express"
import { resolve } from "path"
import { commit, rootPath } from "../constants"

export const router = Router()

const staticPaths: Record<string, string> = {
  "/static": "dist",
  "/static/media": "src/browser/public/media",
}

for (const [publicRoute, sourcePath] of Object.entries(staticPaths)) {
  router.use(
    publicRoute,
    createStaticRouteHandler(resolve(rootPath, sourcePath), {
      index: false,
      cacheControl: commit !== "development",
    }),
  )
}
