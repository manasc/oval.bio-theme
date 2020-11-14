<section>
    <div class="subtitle text-center">Cost of Goods</div>

    <?php if (!empty($args["fields"]["goods_tiers"])) : ?>
        <?php foreach ($args["fields"]["goods_tiers"] as $key => $tier) : ?>

            <?php
            $tier["sum"]["cpu"] = 0;
            $tier["sum"]["bc"] = 0;
            ?>
            <div class="mb-10">
                <div class="labels">
                    <div class="label"><span class="label-text"><?= $tier["tier_title"] ?></span></div>
                </div>
                <table class="table-auto w-full text-sm">
                    <thead>
                        <tr>
                            <th class="border px-4 py-2">Name</th>
                            <th class="border px-4 py-2">Bulk Amount (<?php echo $good["units"]  ?>)</th>
                            <th class="border px-4 py-2">Bulk Cost ($/<?php echo $good["units"] ?>)</th>
                            <th class="border px-4 py-2">Quantity of Individual Unit (<?php echo $good["individual_units"] ?>)</th>
                            <th class="border px-4 py-2">Individual Cost ($/<?php echo $good["individual_units"] ?>)</th>
                            <th class="border px-4 py-2 w-1/2 text-xs">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($tier["goods"] as $key => $good) : ?>
                            <tr>
                                <td class="border px-4 py-2"><?php echo $good["name"] ?>
                                <td class="border font-mono px-4 py-2 text-right"><?php echo $good["bulk_amount"] ?>
                                <td class="border font-mono px-4 py-2 text-right">
                                    <div class="flex">
                                        <div class="flex-1">$</div>
                                        <div class="flex-none"><?php echo $good["bulk_cost"] ?></div>
                                    </div>
                                </td>
                                <td class="border font-mono px-4 py-2 text-right"><?php echo $good["usage_per_unit"] ?>
                                <td class="border font-mono px-4 py-2 text-right"><?php echo $good["cost_per_unit"] ?>
                                <td class="border px-4 py-2"><?php echo $good["description"] ?>
                            </tr>
                            <?php
                            $tier["sum"]["bulk_amount"] += $good["bulk_amount"];
                            $tier["sum"]["usage_per_unit"] += $good["usage_per_unit"];
                            $tier["sum"]["bulk_cost"] += $good["bulk_cost"];
                            $tier["sum"]["cost_per_unit"] += $good["cost_per_unit"];
                            ?>
                        <?php endforeach; ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="border px-4 py-2">Sum</td>
                            <td class="border font-mono px-4 py-2 bg-gray-200 text-right"><?= $tier["sum"]["bulk_amount"]?></td>
                            <td class="border font-mono px-4 py-2 bg-gray-200 text-right"><?= "$" . $tier["sum"]["bulk_cost"] ?></td>
                            <td class="border font-mono px-4 py-2 bg-gray-200 text-right"><?= $tier["sum"]["usage_per_unit"]?></td>
                            <td class="border font-mono px-4 py-2 bg-gray-200 text-right"><?= "$" . $tier["sum"]["cost_per_unit"]  ?></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>

    <?php if (!empty($args["fields"]["introduction"])) : ?>
        <div class="meta mt-16 max-w-3xl mx-auto">
            <div class="tab-content text-lg"><?= $args["fields"]["introduction"] ?></div>
        </div>
    <?php endif; ?>
</section>