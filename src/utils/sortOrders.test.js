import React from 'react'
import { unstable_batchedUpdates } from 'react-dom';
import { fakeOrders } from '../data/fakeOrders';
import {getSortFunction, sortByDate, sortByItemCount, sortOrders, sortTypes} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not object', () => {
		const result = sortByItemCount(Int16Array, Int16Array);
		expect(result).toEqual(0);
	});

	it('items null', () => {
		const order1 = {
			items: null,
		};

		const order2 = {
			items:  null,
		};

		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});


	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortOrders function', () => {
	it('orders are null', () => {
		const result = sortOrders(null,getSortFunction(sortTypes.COUNT));
		expect(result).toEqual(undefined);
	});

	it('sortfunction are null', () => {

		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const orders = [order1,order2]

		const result = sortOrders(orders, null);
		expect(result).toEqual(undefined);
	});
});


describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not object', () => {
		const result = sortByDate(Int16Array, Int16Array);
		expect(result).toEqual(0);
	});

	it('not date', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});
	it('date1 < date2', () => {
		const order1 = {
			date: 154234232432,
		};

		const order2 = {
			date: 15523424,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	it('date1 > date2', () => {
		const order1 = {
			date: 15523424,
		};

		const order2 = {
			date: 154234232432,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('date1 = date2', () => {
		const order1 = {
			date: 154234232432,
		};

		const order2 = {
			date: 154234232432,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});
});