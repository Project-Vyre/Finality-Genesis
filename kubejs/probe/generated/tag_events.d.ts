/// <reference path="./globals.d.ts" />
declare namespace TagEvent {
    class WorldPreset extends Internal.TagEventJS {
    get(id: Special.WorldPresetTag): Internal.TagWrapper
    add(tag: Special.WorldPresetTag, ...id: Special.WorldPreset[]): Internal.TagWrapper
    remove(tag: Special.WorldPresetTag, ...id: Special.WorldPreset[]): Internal.TagWrapper
    removeAll(tag: Special.WorldPresetTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.WorldPreset[]): Internal.TagWrapper
    }
    class BiomeModifier extends Internal.TagEventJS {
    get(id: Special.BiomeModifierTag): Internal.TagWrapper
    add(tag: Special.BiomeModifierTag, ...id: Special.BiomeModifier[]): Internal.TagWrapper
    remove(tag: Special.BiomeModifierTag, ...id: Special.BiomeModifier[]): Internal.TagWrapper
    removeAll(tag: Special.BiomeModifierTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.BiomeModifier[]): Internal.TagWrapper
    }
    class NoiseSettings extends Internal.TagEventJS {
    get(id: Special.NoiseSettingsTag): Internal.TagWrapper
    add(tag: Special.NoiseSettingsTag, ...id: Special.NoiseSettings[]): Internal.TagWrapper
    remove(tag: Special.NoiseSettingsTag, ...id: Special.NoiseSettings[]): Internal.TagWrapper
    removeAll(tag: Special.NoiseSettingsTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.NoiseSettings[]): Internal.TagWrapper
    }
    class DensityFunction extends Internal.TagEventJS {
    get(id: Special.DensityFunctionTag): Internal.TagWrapper
    add(tag: Special.DensityFunctionTag, ...id: Special.DensityFunction[]): Internal.TagWrapper
    remove(tag: Special.DensityFunctionTag, ...id: Special.DensityFunction[]): Internal.TagWrapper
    removeAll(tag: Special.DensityFunctionTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.DensityFunction[]): Internal.TagWrapper
    }
    class StructureModifier extends Internal.TagEventJS {
    get(id: Special.StructureModifierTag): Internal.TagWrapper
    add(tag: Special.StructureModifierTag, ...id: Special.StructureModifier[]): Internal.TagWrapper
    remove(tag: Special.StructureModifierTag, ...id: Special.StructureModifier[]): Internal.TagWrapper
    removeAll(tag: Special.StructureModifierTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.StructureModifier[]): Internal.TagWrapper
    }
    class Noise extends Internal.TagEventJS {
    get(id: Special.NoiseTag): Internal.TagWrapper
    add(tag: Special.NoiseTag, ...id: Special.Noise[]): Internal.TagWrapper
    remove(tag: Special.NoiseTag, ...id: Special.Noise[]): Internal.TagWrapper
    removeAll(tag: Special.NoiseTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Noise[]): Internal.TagWrapper
    }
    class DimensionSettings extends Internal.TagEventJS {
    get(id: Special.DimensionSettingsTag): Internal.TagWrapper
    add(tag: Special.DimensionSettingsTag, ...id: Special.DimensionSettings[]): Internal.TagWrapper
    remove(tag: Special.DimensionSettingsTag, ...id: Special.DimensionSettings[]): Internal.TagWrapper
    removeAll(tag: Special.DimensionSettingsTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.DimensionSettings[]): Internal.TagWrapper
    }
    class ConfiguredFeature extends Internal.TagEventJS {
    get(id: Special.ConfiguredFeatureTag): Internal.TagWrapper
    add(tag: Special.ConfiguredFeatureTag, ...id: Special.ConfiguredFeature[]): Internal.TagWrapper
    remove(tag: Special.ConfiguredFeatureTag, ...id: Special.ConfiguredFeature[]): Internal.TagWrapper
    removeAll(tag: Special.ConfiguredFeatureTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.ConfiguredFeature[]): Internal.TagWrapper
    }
    class Structure extends Internal.TagEventJS {
    get(id: Special.StructureTag): Internal.TagWrapper
    add(tag: Special.StructureTag, ...id: Special.Structure[]): Internal.TagWrapper
    remove(tag: Special.StructureTag, ...id: Special.Structure[]): Internal.TagWrapper
    removeAll(tag: Special.StructureTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Structure[]): Internal.TagWrapper
    }
    class Event extends Internal.TagEventJS {
    get(id: Special.EventTag): Internal.TagWrapper
    add(tag: Special.EventTag, ...id: Special.Event[]): Internal.TagWrapper
    remove(tag: Special.EventTag, ...id: Special.Event[]): Internal.TagWrapper
    removeAll(tag: Special.EventTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Event[]): Internal.TagWrapper
    }
    class TemplatePool extends Internal.TagEventJS {
    get(id: Special.TemplatePoolTag): Internal.TagWrapper
    add(tag: Special.TemplatePoolTag, ...id: Special.TemplatePool[]): Internal.TagWrapper
    remove(tag: Special.TemplatePoolTag, ...id: Special.TemplatePool[]): Internal.TagWrapper
    removeAll(tag: Special.TemplatePoolTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.TemplatePool[]): Internal.TagWrapper
    }
    class ChatType extends Internal.TagEventJS {
    get(id: Special.ChatTypeTag): Internal.TagWrapper
    add(tag: Special.ChatTypeTag, ...id: Special.ChatType[]): Internal.TagWrapper
    remove(tag: Special.ChatTypeTag, ...id: Special.ChatType[]): Internal.TagWrapper
    removeAll(tag: Special.ChatTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.ChatType[]): Internal.TagWrapper
    }
    class MapMarkers extends Internal.TagEventJS {
    get(id: Special.MapMarkersTag): Internal.TagWrapper
    add(tag: Special.MapMarkersTag, ...id: Special.MapMarkers[]): Internal.TagWrapper
    remove(tag: Special.MapMarkersTag, ...id: Special.MapMarkers[]): Internal.TagWrapper
    removeAll(tag: Special.MapMarkersTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.MapMarkers[]): Internal.TagWrapper
    }
    class FlatLevelGeneratorPreset extends Internal.TagEventJS {
    get(id: Special.FlatLevelGeneratorPresetTag): Internal.TagWrapper
    add(tag: Special.FlatLevelGeneratorPresetTag, ...id: Special.FlatLevelGeneratorPreset[]): Internal.TagWrapper
    remove(tag: Special.FlatLevelGeneratorPresetTag, ...id: Special.FlatLevelGeneratorPreset[]): Internal.TagWrapper
    removeAll(tag: Special.FlatLevelGeneratorPresetTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.FlatLevelGeneratorPreset[]): Internal.TagWrapper
    }
    class SoftFluids extends Internal.TagEventJS {
    get(id: Special.SoftFluidsTag): Internal.TagWrapper
    add(tag: Special.SoftFluidsTag, ...id: Special.SoftFluids[]): Internal.TagWrapper
    remove(tag: Special.SoftFluidsTag, ...id: Special.SoftFluids[]): Internal.TagWrapper
    removeAll(tag: Special.SoftFluidsTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.SoftFluids[]): Internal.TagWrapper
    }
    class DimensionType extends Internal.TagEventJS {
    get(id: Special.DimensionTypeTag): Internal.TagWrapper
    add(tag: Special.DimensionTypeTag, ...id: Special.DimensionType[]): Internal.TagWrapper
    remove(tag: Special.DimensionTypeTag, ...id: Special.DimensionType[]): Internal.TagWrapper
    removeAll(tag: Special.DimensionTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.DimensionType[]): Internal.TagWrapper
    }
    class ConfiguredCarver extends Internal.TagEventJS {
    get(id: Special.ConfiguredCarverTag): Internal.TagWrapper
    add(tag: Special.ConfiguredCarverTag, ...id: Special.ConfiguredCarver[]): Internal.TagWrapper
    remove(tag: Special.ConfiguredCarverTag, ...id: Special.ConfiguredCarver[]): Internal.TagWrapper
    removeAll(tag: Special.ConfiguredCarverTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.ConfiguredCarver[]): Internal.TagWrapper
    }
    class StructureSet extends Internal.TagEventJS {
    get(id: Special.StructureSetTag): Internal.TagWrapper
    add(tag: Special.StructureSetTag, ...id: Special.StructureSet[]): Internal.TagWrapper
    remove(tag: Special.StructureSetTag, ...id: Special.StructureSet[]): Internal.TagWrapper
    removeAll(tag: Special.StructureSetTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.StructureSet[]): Internal.TagWrapper
    }
    class PlacedFeature extends Internal.TagEventJS {
    get(id: Special.PlacedFeatureTag): Internal.TagWrapper
    add(tag: Special.PlacedFeatureTag, ...id: Special.PlacedFeature[]): Internal.TagWrapper
    remove(tag: Special.PlacedFeatureTag, ...id: Special.PlacedFeature[]): Internal.TagWrapper
    removeAll(tag: Special.PlacedFeatureTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.PlacedFeature[]): Internal.TagWrapper
    }
    class Biome extends Internal.TagEventJS {
    get(id: Special.BiomeTag): Internal.TagWrapper
    add(tag: Special.BiomeTag, ...id: Special.Biome[]): Internal.TagWrapper
    remove(tag: Special.BiomeTag, ...id: Special.Biome[]): Internal.TagWrapper
    removeAll(tag: Special.BiomeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Biome[]): Internal.TagWrapper
    }
    class ProcessorList extends Internal.TagEventJS {
    get(id: Special.ProcessorListTag): Internal.TagWrapper
    add(tag: Special.ProcessorListTag, ...id: Special.ProcessorList[]): Internal.TagWrapper
    remove(tag: Special.ProcessorListTag, ...id: Special.ProcessorList[]): Internal.TagWrapper
    removeAll(tag: Special.ProcessorListTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.ProcessorList[]): Internal.TagWrapper
    }
    class GameEvent extends Internal.TagEventJS {
    get(id: Special.GameEventTag): Internal.TagWrapper
    add(tag: Special.GameEventTag, ...id: Special.GameEvent[]): Internal.TagWrapper
    remove(tag: Special.GameEventTag, ...id: Special.GameEvent[]): Internal.TagWrapper
    removeAll(tag: Special.GameEventTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.GameEvent[]): Internal.TagWrapper
    }
    class SoundEvent extends Internal.TagEventJS {
    get(id: Special.SoundEventTag): Internal.TagWrapper
    add(tag: Special.SoundEventTag, ...id: Special.SoundEvent[]): Internal.TagWrapper
    remove(tag: Special.SoundEventTag, ...id: Special.SoundEvent[]): Internal.TagWrapper
    removeAll(tag: Special.SoundEventTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.SoundEvent[]): Internal.TagWrapper
    }
    class Fluid extends Internal.TagEventJS {
    get(id: Special.FluidTag): Internal.TagWrapper
    add(tag: Special.FluidTag, ...id: Special.Fluid[]): Internal.TagWrapper
    remove(tag: Special.FluidTag, ...id: Special.Fluid[]): Internal.TagWrapper
    removeAll(tag: Special.FluidTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Fluid[]): Internal.TagWrapper
    }
    class MobEffect extends Internal.TagEventJS {
    get(id: Special.MobEffectTag): Internal.TagWrapper
    add(tag: Special.MobEffectTag, ...id: Special.MobEffect[]): Internal.TagWrapper
    remove(tag: Special.MobEffectTag, ...id: Special.MobEffect[]): Internal.TagWrapper
    removeAll(tag: Special.MobEffectTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.MobEffect[]): Internal.TagWrapper
    }
    class Block extends Internal.TagEventJS {
    get(id: Special.BlockTag): Internal.TagWrapper
    add(tag: Special.BlockTag, ...id: Special.Block[]): Internal.TagWrapper
    remove(tag: Special.BlockTag, ...id: Special.Block[]): Internal.TagWrapper
    removeAll(tag: Special.BlockTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Block[]): Internal.TagWrapper
    }
    class Enchantment extends Internal.TagEventJS {
    get(id: Special.EnchantmentTag): Internal.TagWrapper
    add(tag: Special.EnchantmentTag, ...id: Special.Enchantment[]): Internal.TagWrapper
    remove(tag: Special.EnchantmentTag, ...id: Special.Enchantment[]): Internal.TagWrapper
    removeAll(tag: Special.EnchantmentTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Enchantment[]): Internal.TagWrapper
    }
    class EntityType extends Internal.TagEventJS {
    get(id: Special.EntityTypeTag): Internal.TagWrapper
    add(tag: Special.EntityTypeTag, ...id: Special.EntityType[]): Internal.TagWrapper
    remove(tag: Special.EntityTypeTag, ...id: Special.EntityType[]): Internal.TagWrapper
    removeAll(tag: Special.EntityTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.EntityType[]): Internal.TagWrapper
    }
    class Item extends Internal.TagEventJS {
    get(id: Special.ItemTag): Internal.TagWrapper
    add(tag: Special.ItemTag, ...id: Special.Item[]): Internal.TagWrapper
    remove(tag: Special.ItemTag, ...id: Special.Item[]): Internal.TagWrapper
    removeAll(tag: Special.ItemTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Item[]): Internal.TagWrapper
    }
    class Potion extends Internal.TagEventJS {
    get(id: Special.PotionTag): Internal.TagWrapper
    add(tag: Special.PotionTag, ...id: Special.Potion[]): Internal.TagWrapper
    remove(tag: Special.PotionTag, ...id: Special.Potion[]): Internal.TagWrapper
    removeAll(tag: Special.PotionTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Potion[]): Internal.TagWrapper
    }
    class ParticleType extends Internal.TagEventJS {
    get(id: Special.ParticleTypeTag): Internal.TagWrapper
    add(tag: Special.ParticleTypeTag, ...id: Special.ParticleType[]): Internal.TagWrapper
    remove(tag: Special.ParticleTypeTag, ...id: Special.ParticleType[]): Internal.TagWrapper
    removeAll(tag: Special.ParticleTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.ParticleType[]): Internal.TagWrapper
    }
    class BlockEntityType extends Internal.TagEventJS {
    get(id: Special.BlockEntityTypeTag): Internal.TagWrapper
    add(tag: Special.BlockEntityTypeTag, ...id: Special.BlockEntityType[]): Internal.TagWrapper
    remove(tag: Special.BlockEntityTypeTag, ...id: Special.BlockEntityType[]): Internal.TagWrapper
    removeAll(tag: Special.BlockEntityTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.BlockEntityType[]): Internal.TagWrapper
    }
    class PaintingVariant extends Internal.TagEventJS {
    get(id: Special.PaintingVariantTag): Internal.TagWrapper
    add(tag: Special.PaintingVariantTag, ...id: Special.PaintingVariant[]): Internal.TagWrapper
    remove(tag: Special.PaintingVariantTag, ...id: Special.PaintingVariant[]): Internal.TagWrapper
    removeAll(tag: Special.PaintingVariantTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.PaintingVariant[]): Internal.TagWrapper
    }
    class CustomStat extends Internal.TagEventJS {
    get(id: Special.CustomStatTag): Internal.TagWrapper
    add(tag: Special.CustomStatTag, ...id: Special.CustomStat[]): Internal.TagWrapper
    remove(tag: Special.CustomStatTag, ...id: Special.CustomStat[]): Internal.TagWrapper
    removeAll(tag: Special.CustomStatTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.CustomStat[]): Internal.TagWrapper
    }
    class ChunkStatus extends Internal.TagEventJS {
    get(id: Special.ChunkStatusTag): Internal.TagWrapper
    add(tag: Special.ChunkStatusTag, ...id: Special.ChunkStatus[]): Internal.TagWrapper
    remove(tag: Special.ChunkStatusTag, ...id: Special.ChunkStatus[]): Internal.TagWrapper
    removeAll(tag: Special.ChunkStatusTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.ChunkStatus[]): Internal.TagWrapper
    }
    class RuleTest extends Internal.TagEventJS {
    get(id: Special.RuleTestTag): Internal.TagWrapper
    add(tag: Special.RuleTestTag, ...id: Special.RuleTest[]): Internal.TagWrapper
    remove(tag: Special.RuleTestTag, ...id: Special.RuleTest[]): Internal.TagWrapper
    removeAll(tag: Special.RuleTestTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.RuleTest[]): Internal.TagWrapper
    }
    class PosRuleTest extends Internal.TagEventJS {
    get(id: Special.PosRuleTestTag): Internal.TagWrapper
    add(tag: Special.PosRuleTestTag, ...id: Special.PosRuleTest[]): Internal.TagWrapper
    remove(tag: Special.PosRuleTestTag, ...id: Special.PosRuleTest[]): Internal.TagWrapper
    removeAll(tag: Special.PosRuleTestTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.PosRuleTest[]): Internal.TagWrapper
    }
    class Menu extends Internal.TagEventJS {
    get(id: Special.MenuTag): Internal.TagWrapper
    add(tag: Special.MenuTag, ...id: Special.Menu[]): Internal.TagWrapper
    remove(tag: Special.MenuTag, ...id: Special.Menu[]): Internal.TagWrapper
    removeAll(tag: Special.MenuTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Menu[]): Internal.TagWrapper
    }
    class RecipeType extends Internal.TagEventJS {
    get(id: Special.RecipeTypeTag): Internal.TagWrapper
    add(tag: Special.RecipeTypeTag, ...id: Special.RecipeType[]): Internal.TagWrapper
    remove(tag: Special.RecipeTypeTag, ...id: Special.RecipeType[]): Internal.TagWrapper
    removeAll(tag: Special.RecipeTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.RecipeType[]): Internal.TagWrapper
    }
    class RecipeSerializer extends Internal.TagEventJS {
    get(id: Special.RecipeSerializerTag): Internal.TagWrapper
    add(tag: Special.RecipeSerializerTag, ...id: Special.RecipeSerializer[]): Internal.TagWrapper
    remove(tag: Special.RecipeSerializerTag, ...id: Special.RecipeSerializer[]): Internal.TagWrapper
    removeAll(tag: Special.RecipeSerializerTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.RecipeSerializer[]): Internal.TagWrapper
    }
    class Attribute extends Internal.TagEventJS {
    get(id: Special.AttributeTag): Internal.TagWrapper
    add(tag: Special.AttributeTag, ...id: Special.Attribute[]): Internal.TagWrapper
    remove(tag: Special.AttributeTag, ...id: Special.Attribute[]): Internal.TagWrapper
    removeAll(tag: Special.AttributeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Attribute[]): Internal.TagWrapper
    }
    class PositionSourceType extends Internal.TagEventJS {
    get(id: Special.PositionSourceTypeTag): Internal.TagWrapper
    add(tag: Special.PositionSourceTypeTag, ...id: Special.PositionSourceType[]): Internal.TagWrapper
    remove(tag: Special.PositionSourceTypeTag, ...id: Special.PositionSourceType[]): Internal.TagWrapper
    removeAll(tag: Special.PositionSourceTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.PositionSourceType[]): Internal.TagWrapper
    }
    class CommandArgumentType extends Internal.TagEventJS {
    get(id: Special.CommandArgumentTypeTag): Internal.TagWrapper
    add(tag: Special.CommandArgumentTypeTag, ...id: Special.CommandArgumentType[]): Internal.TagWrapper
    remove(tag: Special.CommandArgumentTypeTag, ...id: Special.CommandArgumentType[]): Internal.TagWrapper
    removeAll(tag: Special.CommandArgumentTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.CommandArgumentType[]): Internal.TagWrapper
    }
    class StatType extends Internal.TagEventJS {
    get(id: Special.StatTypeTag): Internal.TagWrapper
    add(tag: Special.StatTypeTag, ...id: Special.StatType[]): Internal.TagWrapper
    remove(tag: Special.StatTypeTag, ...id: Special.StatType[]): Internal.TagWrapper
    removeAll(tag: Special.StatTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.StatType[]): Internal.TagWrapper
    }
    class VillagerType extends Internal.TagEventJS {
    get(id: Special.VillagerTypeTag): Internal.TagWrapper
    add(tag: Special.VillagerTypeTag, ...id: Special.VillagerType[]): Internal.TagWrapper
    remove(tag: Special.VillagerTypeTag, ...id: Special.VillagerType[]): Internal.TagWrapper
    removeAll(tag: Special.VillagerTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.VillagerType[]): Internal.TagWrapper
    }
    class VillagerProfession extends Internal.TagEventJS {
    get(id: Special.VillagerProfessionTag): Internal.TagWrapper
    add(tag: Special.VillagerProfessionTag, ...id: Special.VillagerProfession[]): Internal.TagWrapper
    remove(tag: Special.VillagerProfessionTag, ...id: Special.VillagerProfession[]): Internal.TagWrapper
    removeAll(tag: Special.VillagerProfessionTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.VillagerProfession[]): Internal.TagWrapper
    }
    class PointOfInterestType extends Internal.TagEventJS {
    get(id: Special.PointOfInterestTypeTag): Internal.TagWrapper
    add(tag: Special.PointOfInterestTypeTag, ...id: Special.PointOfInterestType[]): Internal.TagWrapper
    remove(tag: Special.PointOfInterestTypeTag, ...id: Special.PointOfInterestType[]): Internal.TagWrapper
    removeAll(tag: Special.PointOfInterestTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.PointOfInterestType[]): Internal.TagWrapper
    }
    class MemoryModuleType extends Internal.TagEventJS {
    get(id: Special.MemoryModuleTypeTag): Internal.TagWrapper
    add(tag: Special.MemoryModuleTypeTag, ...id: Special.MemoryModuleType[]): Internal.TagWrapper
    remove(tag: Special.MemoryModuleTypeTag, ...id: Special.MemoryModuleType[]): Internal.TagWrapper
    removeAll(tag: Special.MemoryModuleTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.MemoryModuleType[]): Internal.TagWrapper
    }
    class SensorType extends Internal.TagEventJS {
    get(id: Special.SensorTypeTag): Internal.TagWrapper
    add(tag: Special.SensorTypeTag, ...id: Special.SensorType[]): Internal.TagWrapper
    remove(tag: Special.SensorTypeTag, ...id: Special.SensorType[]): Internal.TagWrapper
    removeAll(tag: Special.SensorTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.SensorType[]): Internal.TagWrapper
    }
    class Schedule extends Internal.TagEventJS {
    get(id: Special.ScheduleTag): Internal.TagWrapper
    add(tag: Special.ScheduleTag, ...id: Special.Schedule[]): Internal.TagWrapper
    remove(tag: Special.ScheduleTag, ...id: Special.Schedule[]): Internal.TagWrapper
    removeAll(tag: Special.ScheduleTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Schedule[]): Internal.TagWrapper
    }
    class Activity extends Internal.TagEventJS {
    get(id: Special.ActivityTag): Internal.TagWrapper
    add(tag: Special.ActivityTag, ...id: Special.Activity[]): Internal.TagWrapper
    remove(tag: Special.ActivityTag, ...id: Special.Activity[]): Internal.TagWrapper
    removeAll(tag: Special.ActivityTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Activity[]): Internal.TagWrapper
    }
    class LootPoolEntryType extends Internal.TagEventJS {
    get(id: Special.LootPoolEntryTypeTag): Internal.TagWrapper
    add(tag: Special.LootPoolEntryTypeTag, ...id: Special.LootPoolEntryType[]): Internal.TagWrapper
    remove(tag: Special.LootPoolEntryTypeTag, ...id: Special.LootPoolEntryType[]): Internal.TagWrapper
    removeAll(tag: Special.LootPoolEntryTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.LootPoolEntryType[]): Internal.TagWrapper
    }
    class LootFunctionType extends Internal.TagEventJS {
    get(id: Special.LootFunctionTypeTag): Internal.TagWrapper
    add(tag: Special.LootFunctionTypeTag, ...id: Special.LootFunctionType[]): Internal.TagWrapper
    remove(tag: Special.LootFunctionTypeTag, ...id: Special.LootFunctionType[]): Internal.TagWrapper
    removeAll(tag: Special.LootFunctionTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.LootFunctionType[]): Internal.TagWrapper
    }
    class LootConditionType extends Internal.TagEventJS {
    get(id: Special.LootConditionTypeTag): Internal.TagWrapper
    add(tag: Special.LootConditionTypeTag, ...id: Special.LootConditionType[]): Internal.TagWrapper
    remove(tag: Special.LootConditionTypeTag, ...id: Special.LootConditionType[]): Internal.TagWrapper
    removeAll(tag: Special.LootConditionTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.LootConditionType[]): Internal.TagWrapper
    }
    class LootNumberProviderType extends Internal.TagEventJS {
    get(id: Special.LootNumberProviderTypeTag): Internal.TagWrapper
    add(tag: Special.LootNumberProviderTypeTag, ...id: Special.LootNumberProviderType[]): Internal.TagWrapper
    remove(tag: Special.LootNumberProviderTypeTag, ...id: Special.LootNumberProviderType[]): Internal.TagWrapper
    removeAll(tag: Special.LootNumberProviderTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.LootNumberProviderType[]): Internal.TagWrapper
    }
    class LootNbtProviderType extends Internal.TagEventJS {
    get(id: Special.LootNbtProviderTypeTag): Internal.TagWrapper
    add(tag: Special.LootNbtProviderTypeTag, ...id: Special.LootNbtProviderType[]): Internal.TagWrapper
    remove(tag: Special.LootNbtProviderTypeTag, ...id: Special.LootNbtProviderType[]): Internal.TagWrapper
    removeAll(tag: Special.LootNbtProviderTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.LootNbtProviderType[]): Internal.TagWrapper
    }
    class LootScoreProviderType extends Internal.TagEventJS {
    get(id: Special.LootScoreProviderTypeTag): Internal.TagWrapper
    add(tag: Special.LootScoreProviderTypeTag, ...id: Special.LootScoreProviderType[]): Internal.TagWrapper
    remove(tag: Special.LootScoreProviderTypeTag, ...id: Special.LootScoreProviderType[]): Internal.TagWrapper
    removeAll(tag: Special.LootScoreProviderTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.LootScoreProviderType[]): Internal.TagWrapper
    }
    class FloatProviderType extends Internal.TagEventJS {
    get(id: Special.FloatProviderTypeTag): Internal.TagWrapper
    add(tag: Special.FloatProviderTypeTag, ...id: Special.FloatProviderType[]): Internal.TagWrapper
    remove(tag: Special.FloatProviderTypeTag, ...id: Special.FloatProviderType[]): Internal.TagWrapper
    removeAll(tag: Special.FloatProviderTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.FloatProviderType[]): Internal.TagWrapper
    }
    class IntProviderType extends Internal.TagEventJS {
    get(id: Special.IntProviderTypeTag): Internal.TagWrapper
    add(tag: Special.IntProviderTypeTag, ...id: Special.IntProviderType[]): Internal.TagWrapper
    remove(tag: Special.IntProviderTypeTag, ...id: Special.IntProviderType[]): Internal.TagWrapper
    removeAll(tag: Special.IntProviderTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.IntProviderType[]): Internal.TagWrapper
    }
    class HeightProviderType extends Internal.TagEventJS {
    get(id: Special.HeightProviderTypeTag): Internal.TagWrapper
    add(tag: Special.HeightProviderTypeTag, ...id: Special.HeightProviderType[]): Internal.TagWrapper
    remove(tag: Special.HeightProviderTypeTag, ...id: Special.HeightProviderType[]): Internal.TagWrapper
    removeAll(tag: Special.HeightProviderTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.HeightProviderType[]): Internal.TagWrapper
    }
    class BlockPredicateType extends Internal.TagEventJS {
    get(id: Special.BlockPredicateTypeTag): Internal.TagWrapper
    add(tag: Special.BlockPredicateTypeTag, ...id: Special.BlockPredicateType[]): Internal.TagWrapper
    remove(tag: Special.BlockPredicateTypeTag, ...id: Special.BlockPredicateType[]): Internal.TagWrapper
    removeAll(tag: Special.BlockPredicateTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.BlockPredicateType[]): Internal.TagWrapper
    }
    class Carver extends Internal.TagEventJS {
    get(id: Special.CarverTag): Internal.TagWrapper
    add(tag: Special.CarverTag, ...id: Special.Carver[]): Internal.TagWrapper
    remove(tag: Special.CarverTag, ...id: Special.Carver[]): Internal.TagWrapper
    removeAll(tag: Special.CarverTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Carver[]): Internal.TagWrapper
    }
    class Feature extends Internal.TagEventJS {
    get(id: Special.FeatureTag): Internal.TagWrapper
    add(tag: Special.FeatureTag, ...id: Special.Feature[]): Internal.TagWrapper
    remove(tag: Special.FeatureTag, ...id: Special.Feature[]): Internal.TagWrapper
    removeAll(tag: Special.FeatureTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Feature[]): Internal.TagWrapper
    }
    class StructurePlacement extends Internal.TagEventJS {
    get(id: Special.StructurePlacementTag): Internal.TagWrapper
    add(tag: Special.StructurePlacementTag, ...id: Special.StructurePlacement[]): Internal.TagWrapper
    remove(tag: Special.StructurePlacementTag, ...id: Special.StructurePlacement[]): Internal.TagWrapper
    removeAll(tag: Special.StructurePlacementTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.StructurePlacement[]): Internal.TagWrapper
    }
    class StructurePiece extends Internal.TagEventJS {
    get(id: Special.StructurePieceTag): Internal.TagWrapper
    add(tag: Special.StructurePieceTag, ...id: Special.StructurePiece[]): Internal.TagWrapper
    remove(tag: Special.StructurePieceTag, ...id: Special.StructurePiece[]): Internal.TagWrapper
    removeAll(tag: Special.StructurePieceTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.StructurePiece[]): Internal.TagWrapper
    }
    class StructureType extends Internal.TagEventJS {
    get(id: Special.StructureTypeTag): Internal.TagWrapper
    add(tag: Special.StructureTypeTag, ...id: Special.StructureType[]): Internal.TagWrapper
    remove(tag: Special.StructureTypeTag, ...id: Special.StructureType[]): Internal.TagWrapper
    removeAll(tag: Special.StructureTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.StructureType[]): Internal.TagWrapper
    }
    class PlacementModifierType extends Internal.TagEventJS {
    get(id: Special.PlacementModifierTypeTag): Internal.TagWrapper
    add(tag: Special.PlacementModifierTypeTag, ...id: Special.PlacementModifierType[]): Internal.TagWrapper
    remove(tag: Special.PlacementModifierTypeTag, ...id: Special.PlacementModifierType[]): Internal.TagWrapper
    removeAll(tag: Special.PlacementModifierTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.PlacementModifierType[]): Internal.TagWrapper
    }
    class BlockStateProviderType extends Internal.TagEventJS {
    get(id: Special.BlockStateProviderTypeTag): Internal.TagWrapper
    add(tag: Special.BlockStateProviderTypeTag, ...id: Special.BlockStateProviderType[]): Internal.TagWrapper
    remove(tag: Special.BlockStateProviderTypeTag, ...id: Special.BlockStateProviderType[]): Internal.TagWrapper
    removeAll(tag: Special.BlockStateProviderTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.BlockStateProviderType[]): Internal.TagWrapper
    }
    class FoliagePlacerType extends Internal.TagEventJS {
    get(id: Special.FoliagePlacerTypeTag): Internal.TagWrapper
    add(tag: Special.FoliagePlacerTypeTag, ...id: Special.FoliagePlacerType[]): Internal.TagWrapper
    remove(tag: Special.FoliagePlacerTypeTag, ...id: Special.FoliagePlacerType[]): Internal.TagWrapper
    removeAll(tag: Special.FoliagePlacerTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.FoliagePlacerType[]): Internal.TagWrapper
    }
    class TrunkPlacerType extends Internal.TagEventJS {
    get(id: Special.TrunkPlacerTypeTag): Internal.TagWrapper
    add(tag: Special.TrunkPlacerTypeTag, ...id: Special.TrunkPlacerType[]): Internal.TagWrapper
    remove(tag: Special.TrunkPlacerTypeTag, ...id: Special.TrunkPlacerType[]): Internal.TagWrapper
    removeAll(tag: Special.TrunkPlacerTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.TrunkPlacerType[]): Internal.TagWrapper
    }
    class RootPlacerType extends Internal.TagEventJS {
    get(id: Special.RootPlacerTypeTag): Internal.TagWrapper
    add(tag: Special.RootPlacerTypeTag, ...id: Special.RootPlacerType[]): Internal.TagWrapper
    remove(tag: Special.RootPlacerTypeTag, ...id: Special.RootPlacerType[]): Internal.TagWrapper
    removeAll(tag: Special.RootPlacerTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.RootPlacerType[]): Internal.TagWrapper
    }
    class TreeDecoratorType extends Internal.TagEventJS {
    get(id: Special.TreeDecoratorTypeTag): Internal.TagWrapper
    add(tag: Special.TreeDecoratorTypeTag, ...id: Special.TreeDecoratorType[]): Internal.TagWrapper
    remove(tag: Special.TreeDecoratorTypeTag, ...id: Special.TreeDecoratorType[]): Internal.TagWrapper
    removeAll(tag: Special.TreeDecoratorTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.TreeDecoratorType[]): Internal.TagWrapper
    }
    class FeatureSizeType extends Internal.TagEventJS {
    get(id: Special.FeatureSizeTypeTag): Internal.TagWrapper
    add(tag: Special.FeatureSizeTypeTag, ...id: Special.FeatureSizeType[]): Internal.TagWrapper
    remove(tag: Special.FeatureSizeTypeTag, ...id: Special.FeatureSizeType[]): Internal.TagWrapper
    removeAll(tag: Special.FeatureSizeTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.FeatureSizeType[]): Internal.TagWrapper
    }
    class BiomeSource extends Internal.TagEventJS {
    get(id: Special.BiomeSourceTag): Internal.TagWrapper
    add(tag: Special.BiomeSourceTag, ...id: Special.BiomeSource[]): Internal.TagWrapper
    remove(tag: Special.BiomeSourceTag, ...id: Special.BiomeSource[]): Internal.TagWrapper
    removeAll(tag: Special.BiomeSourceTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.BiomeSource[]): Internal.TagWrapper
    }
    class ChunkGenerator extends Internal.TagEventJS {
    get(id: Special.ChunkGeneratorTag): Internal.TagWrapper
    add(tag: Special.ChunkGeneratorTag, ...id: Special.ChunkGenerator[]): Internal.TagWrapper
    remove(tag: Special.ChunkGeneratorTag, ...id: Special.ChunkGenerator[]): Internal.TagWrapper
    removeAll(tag: Special.ChunkGeneratorTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.ChunkGenerator[]): Internal.TagWrapper
    }
    class MaterialCondition extends Internal.TagEventJS {
    get(id: Special.MaterialConditionTag): Internal.TagWrapper
    add(tag: Special.MaterialConditionTag, ...id: Special.MaterialCondition[]): Internal.TagWrapper
    remove(tag: Special.MaterialConditionTag, ...id: Special.MaterialCondition[]): Internal.TagWrapper
    removeAll(tag: Special.MaterialConditionTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.MaterialCondition[]): Internal.TagWrapper
    }
    class MaterialRule extends Internal.TagEventJS {
    get(id: Special.MaterialRuleTag): Internal.TagWrapper
    add(tag: Special.MaterialRuleTag, ...id: Special.MaterialRule[]): Internal.TagWrapper
    remove(tag: Special.MaterialRuleTag, ...id: Special.MaterialRule[]): Internal.TagWrapper
    removeAll(tag: Special.MaterialRuleTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.MaterialRule[]): Internal.TagWrapper
    }
    class DensityFunctionType extends Internal.TagEventJS {
    get(id: Special.DensityFunctionTypeTag): Internal.TagWrapper
    add(tag: Special.DensityFunctionTypeTag, ...id: Special.DensityFunctionType[]): Internal.TagWrapper
    remove(tag: Special.DensityFunctionTypeTag, ...id: Special.DensityFunctionType[]): Internal.TagWrapper
    removeAll(tag: Special.DensityFunctionTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.DensityFunctionType[]): Internal.TagWrapper
    }
    class StructureProcessor extends Internal.TagEventJS {
    get(id: Special.StructureProcessorTag): Internal.TagWrapper
    add(tag: Special.StructureProcessorTag, ...id: Special.StructureProcessor[]): Internal.TagWrapper
    remove(tag: Special.StructureProcessorTag, ...id: Special.StructureProcessor[]): Internal.TagWrapper
    removeAll(tag: Special.StructureProcessorTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.StructureProcessor[]): Internal.TagWrapper
    }
    class StructurePoolElement extends Internal.TagEventJS {
    get(id: Special.StructurePoolElementTag): Internal.TagWrapper
    add(tag: Special.StructurePoolElementTag, ...id: Special.StructurePoolElement[]): Internal.TagWrapper
    remove(tag: Special.StructurePoolElementTag, ...id: Special.StructurePoolElement[]): Internal.TagWrapper
    removeAll(tag: Special.StructurePoolElementTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.StructurePoolElement[]): Internal.TagWrapper
    }
    class CatVariant extends Internal.TagEventJS {
    get(id: Special.CatVariantTag): Internal.TagWrapper
    add(tag: Special.CatVariantTag, ...id: Special.CatVariant[]): Internal.TagWrapper
    remove(tag: Special.CatVariantTag, ...id: Special.CatVariant[]): Internal.TagWrapper
    removeAll(tag: Special.CatVariantTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.CatVariant[]): Internal.TagWrapper
    }
    class FrogVariant extends Internal.TagEventJS {
    get(id: Special.FrogVariantTag): Internal.TagWrapper
    add(tag: Special.FrogVariantTag, ...id: Special.FrogVariant[]): Internal.TagWrapper
    remove(tag: Special.FrogVariantTag, ...id: Special.FrogVariant[]): Internal.TagWrapper
    removeAll(tag: Special.FrogVariantTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.FrogVariant[]): Internal.TagWrapper
    }
    class BannerPattern extends Internal.TagEventJS {
    get(id: Special.BannerPatternTag): Internal.TagWrapper
    add(tag: Special.BannerPatternTag, ...id: Special.BannerPattern[]): Internal.TagWrapper
    remove(tag: Special.BannerPatternTag, ...id: Special.BannerPattern[]): Internal.TagWrapper
    removeAll(tag: Special.BannerPatternTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.BannerPattern[]): Internal.TagWrapper
    }
    class Instrument extends Internal.TagEventJS {
    get(id: Special.InstrumentTag): Internal.TagWrapper
    add(tag: Special.InstrumentTag, ...id: Special.Instrument[]): Internal.TagWrapper
    remove(tag: Special.InstrumentTag, ...id: Special.Instrument[]): Internal.TagWrapper
    removeAll(tag: Special.InstrumentTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Instrument[]): Internal.TagWrapper
    }
    class JsonConditions extends Internal.TagEventJS {
    get(id: Special.JsonConditionsTag): Internal.TagWrapper
    add(tag: Special.JsonConditionsTag, ...id: Special.JsonConditions[]): Internal.TagWrapper
    remove(tag: Special.JsonConditionsTag, ...id: Special.JsonConditions[]): Internal.TagWrapper
    removeAll(tag: Special.JsonConditionsTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.JsonConditions[]): Internal.TagWrapper
    }
    class BlendingFunction extends Internal.TagEventJS {
    get(id: Special.BlendingFunctionTag): Internal.TagWrapper
    add(tag: Special.BlendingFunctionTag, ...id: Special.BlendingFunction[]): Internal.TagWrapper
    remove(tag: Special.BlendingFunctionTag, ...id: Special.BlendingFunction[]): Internal.TagWrapper
    removeAll(tag: Special.BlendingFunctionTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.BlendingFunction[]): Internal.TagWrapper
    }
    class VillagerTradesItemListing extends Internal.TagEventJS {
    get(id: Special.VillagerTradesItemListingTag): Internal.TagWrapper
    add(tag: Special.VillagerTradesItemListingTag, ...id: Special.VillagerTradesItemListing[]): Internal.TagWrapper
    remove(tag: Special.VillagerTradesItemListingTag, ...id: Special.VillagerTradesItemListing[]): Internal.TagWrapper
    removeAll(tag: Special.VillagerTradesItemListingTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.VillagerTradesItemListing[]): Internal.TagWrapper
    }
    class Condition extends Internal.TagEventJS {
    get(id: Special.ConditionTag): Internal.TagWrapper
    add(tag: Special.ConditionTag, ...id: Special.Condition[]): Internal.TagWrapper
    remove(tag: Special.ConditionTag, ...id: Special.Condition[]): Internal.TagWrapper
    removeAll(tag: Special.ConditionTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.Condition[]): Internal.TagWrapper
    }
    class EntityDataSerializers extends Internal.TagEventJS {
    get(id: Special.EntityDataSerializersTag): Internal.TagWrapper
    add(tag: Special.EntityDataSerializersTag, ...id: Special.EntityDataSerializers[]): Internal.TagWrapper
    remove(tag: Special.EntityDataSerializersTag, ...id: Special.EntityDataSerializers[]): Internal.TagWrapper
    removeAll(tag: Special.EntityDataSerializersTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.EntityDataSerializers[]): Internal.TagWrapper
    }
    class GlobalLootModifierSerializers extends Internal.TagEventJS {
    get(id: Special.GlobalLootModifierSerializersTag): Internal.TagWrapper
    add(tag: Special.GlobalLootModifierSerializersTag, ...id: Special.GlobalLootModifierSerializers[]): Internal.TagWrapper
    remove(tag: Special.GlobalLootModifierSerializersTag, ...id: Special.GlobalLootModifierSerializers[]): Internal.TagWrapper
    removeAll(tag: Special.GlobalLootModifierSerializersTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.GlobalLootModifierSerializers[]): Internal.TagWrapper
    }
    class FluidType extends Internal.TagEventJS {
    get(id: Special.FluidTypeTag): Internal.TagWrapper
    add(tag: Special.FluidTypeTag, ...id: Special.FluidType[]): Internal.TagWrapper
    remove(tag: Special.FluidTypeTag, ...id: Special.FluidType[]): Internal.TagWrapper
    removeAll(tag: Special.FluidTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.FluidType[]): Internal.TagWrapper
    }
    class MoaType extends Internal.TagEventJS {
    get(id: Special.MoaTypeTag): Internal.TagWrapper
    add(tag: Special.MoaTypeTag, ...id: Special.MoaType[]): Internal.TagWrapper
    remove(tag: Special.MoaTypeTag, ...id: Special.MoaType[]): Internal.TagWrapper
    removeAll(tag: Special.MoaTypeTag): Internal.TagWrapper
    removeAllTagsFrom(...id: Special.MoaType[]): Internal.TagWrapper
    }
}