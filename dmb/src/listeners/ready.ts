import type { Event } from '@lilybird/handlers';

export default {
    event: 'ready',
    run: (client) => {
        console.info(`Logged in as ${client.user.username} (${client.user.id})`);
    }
} satisfies Event<'ready'>;
