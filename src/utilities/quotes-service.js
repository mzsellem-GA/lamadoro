import * as quotesApi from './quotes-api'

export async function indexQuotes() {
    const quotes = await quotesApi.getAll()
    return quotes
}