/// <reference path="./globals.d.ts" />
declare namespace Registry {
    class SoundEvent extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.SoundEventBuilder;
        create(id: string): Internal.SoundEventBuilder;
    }
    class Fluid extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.FluidBuilder;
        create(id: string): Internal.FluidBuilder;
    }
    class MobEffect extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.BasicMobEffect$Builder;
        create(id: string): Internal.BasicMobEffect$Builder;
    }
    class Block extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.BasicBlockJS$Builder;
        create(id: string, type: "detector"): Internal.DetectorBlock$Builder;
        create(id: string, type: "slab"): Internal.SlabBlockBuilder;
        create(id: string, type: "stairs"): Internal.StairBlockBuilder;
        create(id: string, type: "fence"): Internal.FenceBlockBuilder;
        create(id: string, type: "fence_gate"): Internal.FenceGateBlockBuilder;
        create(id: string, type: "wall"): Internal.WallBlockBuilder;
        create(id: string, type: "wooden_pressure_plate"): Internal.WoodenPressurePlateBlockBuilder;
        create(id: string, type: "stone_pressure_plate"): Internal.StonePressurePlateBlockBuilder;
        create(id: string, type: "wooden_button"): Internal.WoodenButtonBlockBuilder;
        create(id: string, type: "stone_button"): Internal.StoneButtonBlockBuilder;
        create(id: string, type: "falling"): Internal.FallingBlockBuilder;
        create(id: string, type: "crop"): Internal.CropBlockBuilder;
        create(id: string, type: "cardinal"): Internal.HorizontalDirectionalBlockBuilder;
        create(id: string): Internal.BasicBlockJS$Builder;
    }
    class Enchantment extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.EnchantmentBuilder;
        create(id: string): Internal.EnchantmentBuilder;
    }
    class EntityType extends Internal.RegistryEventJS {
    }
    class Item extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.BasicItemJS$Builder;
        create(id: string, type: "sword"): Internal.SwordItemBuilder;
        create(id: string, type: "pickaxe"): Internal.PickaxeItemBuilder;
        create(id: string, type: "axe"): Internal.AxeItemBuilder;
        create(id: string, type: "shovel"): Internal.ShovelItemBuilder;
        create(id: string, type: "shears"): Internal.ShearsItemBuilder;
        create(id: string, type: "hoe"): Internal.HoeItemBuilder;
        create(id: string, type: "helmet"): Internal.ArmorItemBuilder$Helmet;
        create(id: string, type: "chestplate"): Internal.ArmorItemBuilder$Chestplate;
        create(id: string, type: "leggings"): Internal.ArmorItemBuilder$Leggings;
        create(id: string, type: "boots"): Internal.ArmorItemBuilder$Boots;
        create(id: string, type: "music_disc"): Internal.RecordItemJS$Builder;
        create(id: string, type: "create:sequenced_assembly"): Internal.SequencedAssemblyItemBuilder;
        create(id: string, type: "create:sandpaper"): Internal.SandpaperItemBuilder;
        create(id: string): Internal.BasicItemJS$Builder;
    }
    class Potion extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.PotionBuilder;
        create(id: string): Internal.PotionBuilder;
    }
    class ParticleType extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.ParticleTypeBuilder;
        create(id: string): Internal.ParticleTypeBuilder;
    }
    class BlockEntityType extends Internal.RegistryEventJS {
    }
    class PaintingVariant extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.PaintingVariantBuilder;
        create(id: string): Internal.PaintingVariantBuilder;
    }
    class CustomStat extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.CustomStatBuilder;
        create(id: string): Internal.CustomStatBuilder;
    }
    class ChunkStatus extends Internal.RegistryEventJS {
    }
    class RuleTest extends Internal.RegistryEventJS {
    }
    class PosRuleTest extends Internal.RegistryEventJS {
    }
    class Menu extends Internal.RegistryEventJS {
    }
    class RecipeType extends Internal.RegistryEventJS {
    }
    class RecipeSerializer extends Internal.RegistryEventJS {
    }
    class Attribute extends Internal.RegistryEventJS {
    }
    class GameEvent extends Internal.RegistryEventJS {
    }
    class PositionSourceType extends Internal.RegistryEventJS {
    }
    class StatType extends Internal.RegistryEventJS {
    }
    class VillagerType extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.VillagerTypeBuilder;
        create(id: string): Internal.VillagerTypeBuilder;
    }
    class VillagerProfession extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.VillagerProfessionBuilder;
        create(id: string): Internal.VillagerProfessionBuilder;
    }
    class PointOfInterestType extends Internal.RegistryEventJS {
        create(id: string, type: "basic"): Internal.PoiTypeBuilder;
        create(id: string): Internal.PoiTypeBuilder;
    }
    class MemoryModuleType extends Internal.RegistryEventJS {
    }
    class SensorType extends Internal.RegistryEventJS {
    }
    class Schedule extends Internal.RegistryEventJS {
    }
    class Activity extends Internal.RegistryEventJS {
    }
    class LootPoolEntryType extends Internal.RegistryEventJS {
    }
    class LootFunctionType extends Internal.RegistryEventJS {
    }
    class LootConditionType extends Internal.RegistryEventJS {
    }
    class LootNumberProviderType extends Internal.RegistryEventJS {
    }
    class LootNbtProviderType extends Internal.RegistryEventJS {
    }
    class LootScoreProviderType extends Internal.RegistryEventJS {
    }
    class CommandArgumentType extends Internal.RegistryEventJS {
    }
    class DimensionType extends Internal.RegistryEventJS {
    }
    class Dimension extends Internal.RegistryEventJS {
    }
    class FloatProviderType extends Internal.RegistryEventJS {
    }
    class IntProviderType extends Internal.RegistryEventJS {
    }
    class HeightProviderType extends Internal.RegistryEventJS {
    }
    class BlockPredicateType extends Internal.RegistryEventJS {
    }
    class WorldgenNoiseSettings extends Internal.RegistryEventJS {
    }
    class WorldgenConfiguredCarver extends Internal.RegistryEventJS {
    }
    class WorldgenConfiguredFeature extends Internal.RegistryEventJS {
    }
    class WorldgenPlacedFeature extends Internal.RegistryEventJS {
    }
    class WorldgenStructure extends Internal.RegistryEventJS {
    }
    class WorldgenStructureSet extends Internal.RegistryEventJS {
    }
    class WorldgenProcessorList extends Internal.RegistryEventJS {
    }
    class WorldgenTemplatePool extends Internal.RegistryEventJS {
    }
    class WorldgenBiome extends Internal.RegistryEventJS {
    }
    class WorldgenNoise extends Internal.RegistryEventJS {
    }
    class WorldgenDensityFunction extends Internal.RegistryEventJS {
    }
    class WorldgenWorldPreset extends Internal.RegistryEventJS {
    }
    class WorldgenFlatLevelGeneratorPreset extends Internal.RegistryEventJS {
    }
    class WorldgenCarver extends Internal.RegistryEventJS {
    }
    class WorldgenFeature extends Internal.RegistryEventJS {
    }
    class WorldgenStructurePlacement extends Internal.RegistryEventJS {
    }
    class WorldgenStructurePiece extends Internal.RegistryEventJS {
    }
    class WorldgenStructureType extends Internal.RegistryEventJS {
    }
    class WorldgenPlacementModifierType extends Internal.RegistryEventJS {
    }
    class WorldgenBlockStateProviderType extends Internal.RegistryEventJS {
    }
    class WorldgenFoliagePlacerType extends Internal.RegistryEventJS {
    }
    class WorldgenTrunkPlacerType extends Internal.RegistryEventJS {
    }
    class WorldgenTreeDecoratorType extends Internal.RegistryEventJS {
    }
    class WorldgenRootPlacerType extends Internal.RegistryEventJS {
    }
    class WorldgenFeatureSizeType extends Internal.RegistryEventJS {
    }
    class WorldgenBiomeSource extends Internal.RegistryEventJS {
    }
    class WorldgenChunkGenerator extends Internal.RegistryEventJS {
    }
    class WorldgenMaterialCondition extends Internal.RegistryEventJS {
    }
    class WorldgenMaterialRule extends Internal.RegistryEventJS {
    }
    class WorldgenDensityFunctionType extends Internal.RegistryEventJS {
    }
    class WorldgenStructureProcessor extends Internal.RegistryEventJS {
    }
    class WorldgenStructurePoolElement extends Internal.RegistryEventJS {
    }
    class ChatType extends Internal.RegistryEventJS {
    }
    class CatVariant extends Internal.RegistryEventJS {
    }
    class FrogVariant extends Internal.RegistryEventJS {
    }
    class BannerPattern extends Internal.RegistryEventJS {
    }
    class Instrument extends Internal.RegistryEventJS {
    }
    class Condition extends Internal.RegistryEventJS {
    }
    class MoaType extends Internal.RegistryEventJS {
    }
    class BlendingFunction extends Internal.RegistryEventJS {
    }
    class VillagerTradesItemListing extends Internal.RegistryEventJS {
    }
    class Menu extends Internal.RegistryEventJS {
    }
    class DimensionPainting extends Internal.RegistryEventJS {
    }
    class LunarDimensionSettings extends Internal.RegistryEventJS {
    }
    class LunarEvent extends Internal.RegistryEventJS {
    }
    class BiomeModifier extends Internal.RegistryEventJS {
    }
    class BiomeModifierSerializers extends Internal.RegistryEventJS {
    }
    class EntityDataSerializers extends Internal.RegistryEventJS {
    }
    class FluidType extends Internal.RegistryEventJS {
    }
    class GlobalLootModifierSerializers extends Internal.RegistryEventJS {
    }
    class HolderSetType extends Internal.RegistryEventJS {
    }
    class StructureModifier extends Internal.RegistryEventJS {
    }
    class StructureModifierSerializers extends Internal.RegistryEventJS {
    }
    class FruitType extends Internal.RegistryEventJS {
    }
    class TimeEffect extends Internal.RegistryEventJS {
    }
    class JsonConditions extends Internal.RegistryEventJS {
    }
    class Schools extends Internal.RegistryEventJS {
    }
    class Spells extends Internal.RegistryEventJS {
    }
    class MapMarkers extends Internal.RegistryEventJS {
    }
    class SoftFluids extends Internal.RegistryEventJS {
    }
}