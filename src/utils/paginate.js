import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
    let startIndex = (pageNumber - 1) * pageSize;

    if (startIndex >= items.length) {
        startIndex = Math.max(0, items.length - pageSize);
    }

    return items.slice(startIndex, startIndex + pageSize);
}

export function allPageCount(itemsCount, pageSize) {
    return Math.ceil(itemsCount / pageSize);
}

export function pagesForCurrentPage(currentPage, maxPageLists, maxPageCount) {
    const pagesListIndex = Math.floor((currentPage - 1) / maxPageLists);
    const startPageList = pagesListIndex * maxPageLists + 1;
    const endPageList = Math.min(
        startPageList + maxPageLists,
        maxPageCount + 1
    );

    return _.range(startPageList, endPageList);
}

export function isLastPage(currentPage, pageSize, itemsCount) {
    return Math.ceil(itemsCount / pageSize) === currentPage;
}

export function isChangePageForDelete(currentPage, pageSize, itemsCount) {
    if (itemsCount === 1) {
        return false;
    }

    if (!isLastPage(currentPage, pageSize, itemsCount)) {
        return false;
    }

    return itemsCount % pageSize === 1;
}
