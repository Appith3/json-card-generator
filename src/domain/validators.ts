import type {
  CardConfigInput,
  CardConfigResolved,
} from "./types"
import { DEFAULT_CARD_STYLE } from "../config/card.defaults"
import type { SongRaw } from "../data/songs.schema"

export function resolveCardConfig(
  input: CardConfigInput
): CardConfigResolved {
  return {
    display_order: input.display_order,
    show_element: input.show_element ?? true,
    data_field_name: input.data_field_name,
    card_component_element: input.card_component_element,
    style_props: {
      ...DEFAULT_CARD_STYLE,
      ...input.style_props,
    },
  }
}

export function hasRenderableValue(
  data: SongRaw,
  field: keyof SongRaw
): boolean {
  const value = data[field]
  return value !== null && value !== ""
}

export function shouldRenderCard(
  card: CardConfigResolved,
  song: SongRaw
): boolean {
  return card.show_element && hasRenderableValue(song, card.data_field_name)
}
