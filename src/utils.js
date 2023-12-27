// Task 2 Implementation
export const mergeOverlappingItems = (items) => {
  const sortedItems = items.slice().sort((a, b) => a.startPx - b.startPx);

  const mergedItems = sortedItems.reduce((result, currentItem) => {
    const lastMergedItem = result[result.length - 1];

    if (!lastMergedItem || lastMergedItem.endPx < currentItem.startPx) {
      result.push(currentItem);
    } else if (lastMergedItem.endPx < currentItem.endPx) {
      lastMergedItem.endPx = currentItem.endPx;
    }

    return result;
  }, []);

  return mergedItems;
};

// const testInput1 = [
//   { startPx: 10, endPx: 30 },
//   { startPx: 55, endPx: 65 },
//   { startPx: 35, endPx: 50 },
//   { startPx: 20, endPx: 40 },
//   { startPx: 60, endPx: 70 }
// ];

// const testInput2 = [
//   { startPx: 10, endPx: 30 },
//   { startPx: 20, endPx: 40 }
// ];
