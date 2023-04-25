import { pagesMetadata } from "@app/app/config";
import { headers } from 'next/headers';

export const getPageMetadata = () => {
  const headersInstance = headers();
  const currentPath = headersInstance.get('x-invoke-path')

  return pagesMetadata.find(({ path }) => path === currentPath) ?? {
    description: undefined,
    path: undefined,
    title: undefined
  }
}