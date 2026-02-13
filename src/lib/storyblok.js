import { useStoryblokApi } from '@storyblok/astro';

const storyblokApi = useStoryblokApi();

export async function getStory(slug, options = {}) {
    try {
        const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
            version: import.meta.env.DEV ? 'draft' : 'published',
            ...options,
        });

        return data?.story;
    } catch (error) {
        console.error(`Error fetching story for slug ${slug}:`, error);
        return null;
    }
}

export async function getAll(options = {}) {
    try {
        const response = await storyblokApi.getAll(`cdn/stories`, {
            version: import.meta.env.DEV ? 'draft' : 'published',
            ...options,
        });

        return response;
    } catch (error) {
        console.error(`Error fetching the stories`, error);
        return null;
    }
}