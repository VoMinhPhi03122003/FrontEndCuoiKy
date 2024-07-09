export const formatNumber = (x, char) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, char)

export function formatRating(rating) {
    const total = Object.keys(rating).reduce((previous, key) => previous + rating[key], 0)
    const average = (Object.keys(rating).reduce((previous, key, index) => previous + (rating[key] * (5 - index)), 0) / total).toFixed(1)
    return {
        total: total,
        average: average,
        avg5: rating['5star'] * 100 / total,
        avg4: rating['4star'] * 100 / total,
        avg3: rating['3star'] * 100 / total,
        avg2: rating['2star'] * 100 / total,
        avg1: rating['1star'] * 100 / total
    }
}
