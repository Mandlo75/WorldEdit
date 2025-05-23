/*
 * WorldEdit, a Minecraft world manipulation toolkit
 * Copyright (C) sk89q <http://www.sk89q.com>
 * Copyright (C) WorldEdit team and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

package com.sk89q.worldedit.fabric;

import com.sk89q.worldedit.world.block.BlockType;
import com.sk89q.worldedit.world.registry.BlockCategoryRegistry;
import net.minecraft.core.Holder;
import net.minecraft.core.HolderSet;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.tags.TagKey;

import java.util.Set;
import java.util.stream.Collectors;

public class FabricBlockCategoryRegistry implements BlockCategoryRegistry {
    @Override
    public Set<BlockType> getCategorisedByName(String category) {
        return FabricWorldEdit.getRegistry(Registries.BLOCK)
            .get(TagKey.create(Registries.BLOCK, ResourceLocation.parse(category)))
            .stream()
            .flatMap(HolderSet.Named::stream)
            .map(Holder::value)
            .map(FabricAdapter::adapt)
            .collect(Collectors.toSet());
    }
}
