import { SlashCommand } from "@lilybird/handlers";
import { POSTApplicationCommandStructure } from "lilybird";

export default {
  post: "GLOBAL",
  data: {
    name: "ping",
    description: "Check the bot's ping.",
  } satisfies POSTApplicationCommandStructure,
  run: async (interaction) => {
    await interaction.deferReply();

    const { ws, rest } = await interaction.client.ping();

    await interaction.editReply({
      content: `🏓 WebSocket: \`${ws}ms\` | Rest: \`${rest}ms\``,
    });
  },
} satisfies SlashCommand;