# projects structure for react

src
	/components - for react components
	/pages - for our pages
	/data - json data required
	/context - context passed to components
	/hooks - custom hooks
	/utils - small utility functions

# format number as currency
utils/format-currency.ts

```ts
	const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
	currency: "USD",
	style: "currency",
});

export default function formatCurrency(number: number) {
	return CURRENCY_FORMATTER.format(number);
}

```