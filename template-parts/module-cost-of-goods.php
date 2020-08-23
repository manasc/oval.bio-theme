<section>
    <div class="tab-box-title">Cost of Goods</div>

    <?php if (!empty($args["fields"]["goods_tiers"])) : ?>
        <?php foreach ($args["fields"]["goods_tiers"] as $key => $tier) : ?>

            <?php
            $tier["sum"]["cpu"] = 0;
            $tier["sum"]["bc"] = 0;
            ?>
            <div class="mb-10">
                <div class="labels">
                    <div class="label"><span class="label-text"><?php echo $tier["tier_title"] ?></span></div>
                </div>
                <table class="table-auto w-full text-sm">
                    <thead>
                        <tr>
                            <th class="border px-4 py-2">Name</th>
                            <th class="border px-4 py-2">Bulk Amount</th>
                            <th class="border px-4 py-2">Bulk Cost</th>
                            <th class="border px-4 py-2">Cost Per Unit</th>
                            <th class="border px-4 py-2">Usage Per Unit</th>
                            <th class="border px-4 py-2 w-1/2 text-xs">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($tier["goods"] as $key => $good) : ?>
                            <tr>
                                <td class="border px-4 py-2"><?php echo $good["name"] ?></td>
                                <td class="border px-4 py-2"><?php echo $good["bulk_amount"] . $good["units"]  ?></td>
                                <td class="border px-4 py-2"><?php echo "$" . $good["bulk_cost"] ?></td>
                                <td class="border px-4 py-2"><?php echo "$" . $good["cost_per_unit"] . " /" . $good["units"] ?></td>
                                <td class="border px-4 py-2"><?php echo $good["usage_per_unit"] . $good["units"] ?></td>
                                <td class="border px-4 py-2"><?php echo $good["description"] ?></td>
                            </tr>
                            <?php
                            $tier["sum"]["bc"] += $good["bulk_cost"];
                            $tier["sum"]["cpu"] += $good["cost_per_unit"];
                            ?>
                        <?php endforeach; ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td class="border px-4 py-2">Sum</td>
                            <td class="border px-4 py-2 bg-gray-200"><?php echo "$" . $tier["sum"]["bc"] ?></td>
                            <td class="border px-4 py-2 bg-gray-200"><?php echo "$" . $tier["sum"]["cpu"] . " /" . $good["units"]  ?></td>
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
        <div class="meta py-10 max-w-md">
            <div class="label-text mb-3">Our Code of Transparency</div>
            <div class="tab-content"><?php echo $args["fields"]["introduction"] ?></div>
            <div class="cta mt-5">
                <a href="" class="button">
                    Read More
                    <i class="button-icon fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </div>
    <?php endif; ?>
</section>