import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "ojek7rkq",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})

// sk5Au15Blyz67UEuxTbpZmKpnSqsWUO5TBDEEa1CXvNLiHcAWQUwzMTYGb9FLTlMe0BO8lW4w6CQqz69SvpP6GEsiil8Q
//TwyLvCvHCMdBKNgpCX3FzE9YANiu1xdXgoDRpMGo9DgceWFAiCUlw85CxJDFYcJFePfDnjtmjHy6S8krNOgb2Mt

export const writeClient = createClient({
    projectId: "ojek7rkq",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "sk5Au15Blyz67UEuxTbpZmKpnSqsWUO5TBDEEa1CXvNLiHcAWQUwzMTYGb9FLTlMe0BO8lW4w6CQqz69SvpP6GEsiil8QTwyLvCvHCMdBKNgpCX3FzE9YANiu1xdXgoDRpMGo9DgceWFAiCUlw85CxJDFYcJFePfDnjtmjHy6S8krNOgb2Mt"
})