/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_image_free(a: number): void;
export function image_new(a: number, b: number, c: number, d: number): number;
export function image_reuse(a: number, b: number, c: number, d: number, e: number): void;
export function image_pixels(a: number): number;
export function image_width(a: number): number;
export function image_height(a: number): number;
export function image_width_bk(a: number): number;
export function image_height_bk(a: number): number;
export function image_apply_change(a: number): void;
export function image_discard_change(a: number): void;
export function image_undo(a: number): void;
export function image_crop(a: number, b: number, c: number, d: number, e: number): void;
export function image_rotate(a: number, b: number): void;
export function image_rotate_by(a: number): void;
export function image_flip_v(a: number): void;
export function image_flip_h(a: number): void;
export function image_scale(a: number, b: number): void;
export function image_rgb_to_hsi(a: number): void;
export function image_adjust_hsi(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function image_hsi_to_rgb(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): void;
export function image_manual_adjust_intensity(a: number, b: number, c: number): void;
export function image_auto_adjust_intensity(a: number): void;
export function image_clear_hsi(a: number): void;
export function image_pixelate(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): void;
export function image_miniaturize(a: number, b: number, c: number, d: number): void;
export function image_blur(a: number, b: number): void;
export function image_gaussian_blur(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function image_bilateral_filter(a: number, b: number, c: number, d: number, e: number): void;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;