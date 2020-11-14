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
                            <th class="border px-4 py-2 text-left">Name</th>
                            <th class="border px-4 py-2 text-left">Bulk Amount</th>
                            <th class="border px-4 py-2 text-left">Bulk Cost</th>
                            <th class="border px-4 py-2 text-left">Single Unit</th>
                            <th class="border px-4 py-2 text-left">Unit Cost</th>
                            <th class="border px-4 py-2 text-left" style="width: 500px">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($tier["goods"] as $key => $good) : ?>
                            <tr>
                                <td class="border px-4 py-2"><?php echo $good["name"] ?></td>
                                <td class="border font-mono px-4 py-2"><?php echo $good["bulk_amount"] . " " . $good["units"] ?></td>
                                <td class="border font-mono px-4 py-2">$<?php echo $good["bulk_cost"] . " /" . $good["units"] ?></td>
                                <td class="border font-mono px-4 py-2"><?php echo $good["usage_per_unit"] . " " . $good["individual_units"] ?></td>
                                <td class="border font-mono px-4 py-2">$<?php echo $good["cost_per_unit"] . " /" . $good["individual_units"] ?></td>
                                <td class="border px-4 py-2"><?php echo $good["description"] ?></td>
                            </tr>
                            <?php
                            $tier["sum"]["bulk_cost"] += $good["bulk_cost"];
                            $tier["sum"]["cost_per_unit"] += $good["cost_per_unit"];
                            ?>
                        <?php endforeach; ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td class="px-4 py-2 text-right">Total for bulk</td>
                            <td class="border font-mono px-4 py-2 bg-gray-200"><?= "$" . $tier["sum"]["bulk_cost"] ?></td>
                            <td class="px-4 py-2 text-right">Total for a Single Unit</td>
                            <td class="border font-mono px-4 py-2 bg-gray-200"><?= "$" . $tier["sum"]["cost_per_unit"] ?></td>
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