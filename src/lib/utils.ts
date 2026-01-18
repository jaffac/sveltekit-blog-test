export function formatDate(date: string, locales = 'en-GB') {
	// Create a date object, ensuring we handle the string correctly
	const d = new Date(date)

	const day = d.getDate()
	const month = d.toLocaleString(locales, { month: 'long' })
	const year = d.getFullYear()

	// The dot after the day is essential for the Sarajevo format
	return `${day}. ${month} ${year}`
}
