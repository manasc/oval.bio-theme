<!-- FAQ -->
<section class="content-box">
    <div class="max-w-3xl mx-auto">
        <h1 class="subtitle text-center">Frequently Asked Questions</h1>
        <div class="accordion-box">
            <div class="accordion">
                <?php foreach ($args['fields']['faqs'] as $x => $faq) : ?>
                    <div class="accordion-item accordion-item-has-icon">
                        <div class="accordion-item-header">
                            <div class="accordion-item-question">
                                <div class="accordion-item-icon">
                                    <i class="fas fa-plus-circle"></i>
                                </div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis et velit, officiis at molestias praesentium assumenda.
                            </div>
                        </div>
                        <div class="accordion-item-content">
                            <div class="accordion-item-answer">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita laudantium nam et, amet, ipsum quasi id, accusantium nulla error quae asperiores veritatis repudiandae quidem assumenda laboriosam laborum eum eius tempora!
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php if (!empty($args["fields"]["introduction"])) : ?>
            <div class="mt-10 max-w-md">
                <?= $args["fields"]["introduction"]; ?>
            </div>
        <?php endif; ?>
    </div>
</section>