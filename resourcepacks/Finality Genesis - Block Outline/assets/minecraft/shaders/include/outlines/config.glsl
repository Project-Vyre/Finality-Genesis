// Shader written by Enchanted_Games (https://enchanted.games)
// You may edit and use this code as part of maps / other resourcepacks as long as credits are given to Enchanted_Games

// Any functions not made by me will include a credit line at the top of them

// Generated with https://outlines.enchanted.games

//    -- CONFIG STARTS HERE --
//         !! WARNING !!
//     Do not copy config from
//     an older version of this
//   pack, it will probably crash!

const vec4 block_COLOURS[] = vec4[](
	vec4(1, 0.97647, 0.74902, 1),
	vec4(1, 0.92157, 0.54902, 1),
	vec4(0.96863, 0.79608, 0.42353, 1),
	vec4(0.80784, 0.62745, 0.35294, 1),
	vec4(0.68627, 0.47451, 0.3098, 1),
	vec4(0.6, 0.35294, 0.23922, 1),
	vec4(0.44706, 0.27843, 0.19216, 1),
	vec4(0.42353, 0.20784, 0.15686, 1),
	vec4(0.34902, 0.14118, 0.14118, 1),
	vec4(0.42353, 0.20784, 0.15686, 1),
	vec4(0.44706, 0.27843, 0.19216, 1),
	vec4(0.6, 0.35294, 0.23922, 1),
	vec4(0.68627, 0.47451, 0.3098, 1),
	vec4(0.80784, 0.62745, 0.35294, 1),
	vec4(0.96863, 0.79608, 0.42353, 1),
	vec4(1, 0.92157, 0.54902, 1),
	vec4(1, 0.97647, 0.74902, 1)
);
#define block_ANIM_SPEED 1000
#define block_COLOUR_PERIOD 2
#define block_SMOOTH_MIX true
#define block_ANIMATE_WITH_DISTANCE true
#define block_ANIMATE_ALONG_LINES false
#define block_ANIM_DIRECTION -1
#define block_LINE_THICKNESS 1
#define block_IGNORES_DEPTH false

const vec4 hitbox_COLOURS[] = vec4[](
	vec4(0.6, 0.35294, 0.23922, 1),
	vec4(0.96863, 0.79608, 0.42353, 1),
	vec4(1, 0.97647, 0.74902, 1)
);
#define hitbox_ANIM_SPEED 400
#define hitbox_COLOUR_PERIOD 0.5
#define hitbox_SMOOTH_MIX true
#define hitbox_ANIMATE_WITH_DISTANCE false
#define hitbox_ANIMATE_ALONG_LINES true
#define hitbox_ANIM_DIRECTION 1
#define hitbox_LINE_THICKNESS 1
#define hitbox_APPLY_TO_ALL_LINES false