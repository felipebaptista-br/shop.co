import { compareDesc } from 'date-fns';

type WithCreatedAt = { created_at: string };

const sortArrayByCreationDate = <T extends WithCreatedAt>(arrayWithCreatedAt: T[]): T[] => {
    return arrayWithCreatedAt.sort((a, b) => compareDesc(new Date(a.created_at), new Date(b.created_at)));
};

const generateArrayByQuantity = <T>(arrayWithCreatedAt: T[], quantity: number): T[] => {
    return arrayWithCreatedAt.slice(0, quantity);
};

export {
    sortArrayByCreationDate,
    generateArrayByQuantity
};
