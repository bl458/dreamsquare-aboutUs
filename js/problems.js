// javascript
var inArea
            map = $('#Problems'),
            captions = {
                stage1: ["Stage 1 Exploration",
                    "I am not sure where to start. I wish to examine myself based on my interests and " 										+ "skills to understand which field suits me best."],
                stage2: ["Stage 2 Establishment",
                  "I am shaky about choosing my first job. I wish to know specifically which positions " 									 + "in which companies are available and a precise picture of what I could be doing"  									+ " for my job."],
                stage3: ["Stage 3 Evaluation",
                  "I am dissatisfied with my current job."
                  + " I am looking for job opportunities based on not just my "
                  + "qualifications but also my personality and work style."],
                stage4: ["Stage 4 Mid-To-Late Career",
                 "I am thinking about the next step in my career path and want to know about how "
      					 + "other successful people in my field made their decisions in similar situations."]
            },
            single_opts = {
                fillColor: '000000',
                fillOpacity: 0,
                stroke: true,
                strokeColor: 'ff0000',
                strokeWidth: 2
            },
            all_opts = {
                fillColor: 'ffffff',
                fillOpacity: 0.6,
                stroke: true,
                strokeWidth: 2,
                strokeColor: 'ffffff'
            },
            initial_opts = {
                mapKey: 'data-name',
                isSelectable: false,
                onMouseover: function (data) {
                    inArea = true;
                    $('#problems-caption-header').text(captions[data.key][0]);
                    $('#problems-caption-text').text(captions[data.key][1]);
                    $('#problems-caption').show();
                },
                onMouseout: function (data) {
                    inArea = false;
                    $('#problems-caption').hide();
                }
            };
        opts = $.extend({}, all_opts, initial_opts, single_opts);

        map.mapster('unbind')
            .mapster(opts)
            .bind('mouseover', function () {
                if (!inArea) {
                    map.mapster('set_options', all_opts)
                       .mapster('set', true, 'all')
                       .mapster('set_options', single_opts);
                }
            }).bind('mouseout', function () {
                if (!inArea) {
                    map.mapster('set', false, 'all');
                }
            });
