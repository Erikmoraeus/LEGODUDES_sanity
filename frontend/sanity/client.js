import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "ojek7rkq",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})