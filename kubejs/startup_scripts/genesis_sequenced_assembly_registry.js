// requires: create
// ignored: true

/**
 * @file Creates transitional items for use in Sequenced Assembly recipes when KubeJS Create is not present.
 * @author squoshi <https://github.com/squoshi> Fixed this.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
Work in progress!
*/

const $SequencedAssemblyItem = Java.loadClass('com.simibubi.create.content.processing.sequenced.SequencedAssemblyItem')
const $Properties = Java.loadClass('net.minecraft.world.item.Item$Properties')

StartupEvents.registry('item', event => {
    event.createCustom('kubejs:sequenced_assembly_example_item', () => new $SequencedAssemblyItem(new $Properties()))
})

/*
package com.simibubi.create.content.processing.sequenced;

import com.simibubi.create.foundation.utility.Color;

import net.minecraft.core.NonNullList;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;

public class SequencedAssemblyItem extends Item {

    public SequencedAssemblyItem(Properties p_i48487_1_) {
        super(p_i48487_1_.stacksTo(1));
    }

    public float getProgress(ItemStack stack) {
        if (!stack.hasTag())
            return 0;
        CompoundTag tag = stack.getTag();
        if (!tag.contains("SequencedAssembly"))
            return 0;
        return tag.getCompound("SequencedAssembly")
            .getFloat("Progress");
    }

    @Override
    public void fillItemCategory(CreativeModeTab p_150895_1_, NonNullList<ItemStack> p_150895_2_) {}

    @Override
    public boolean isBarVisible(ItemStack stack) {
        return true;
    }

    @Override
    public int getBarWidth(ItemStack stack) {
        return Math.round(getProgress(stack) * 13);
    }

    @Override
    public int getBarColor(ItemStack stack) {
        return Color.mixColors(0xFF_FFC074, 0xFF_46FFE0, getProgress(stack));
    }

}
*/