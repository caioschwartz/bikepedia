export function getShortContent(content, maxLength = 450) {
    if (content.length <= maxLength) return content;
  
    return content.slice(0, maxLength) + '...';
};