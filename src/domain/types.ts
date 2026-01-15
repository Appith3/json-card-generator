import type { SongRaw } from "../data/songs.schema";

export type CardComponentElement = 
    "title"
    | "subtitle"
    | "paragraph"
    | "badge"
    | "action";
    // | "rating";

export type CardStyleProps = {
    variant?: "primary" | "secondary" | "muted" | "danger",
    size?: "sm" | "md" | "lg",
    align?: "left" | "center" | "right",
    icon_name?: string,
    className?: string
}

export type CardConfigInput = {
    display_order: number,
    show_element?: boolean,
    data_field_name: keyof SongRaw,
    card_component_element: CardComponentElement,
    style_props?: Partial<CardStyleProps>
}

export type CardConfigResolved = {
    display_order: number,
    show_element: boolean,
    data_field_name: keyof SongRaw,
    card_component_element: CardComponentElement,
    style_props: CardStyleProps
}