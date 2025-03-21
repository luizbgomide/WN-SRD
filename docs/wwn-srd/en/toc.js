// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="-an-introduction.html">An Introduction</a></li><li class="chapter-item "><a href="01/00-character-creation.html"><strong aria-hidden="true">1.</strong> Character Creation</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="01/01-attributes.html"><strong aria-hidden="true">1.1.</strong> Attributes</a></li><li class="chapter-item "><a href="01/02-skills.html"><strong aria-hidden="true">1.2.</strong> Skills</a></li><li class="chapter-item "><a href="01/03-backgrounds.html"><strong aria-hidden="true">1.3.</strong> Backgrounds</a></li><li class="chapter-item "><a href="01/04-classes.html"><strong aria-hidden="true">1.4.</strong> Classes</a></li><li class="chapter-item "><a href="01/05/00-class-list.html"><strong aria-hidden="true">1.5.</strong> The Class List</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="01/05/01/00-the-warrior.html"><strong aria-hidden="true">1.5.1.</strong> The Warrior</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="01/05/01/01-the-mageslayer.html"><strong aria-hidden="true">1.5.1.1.</strong> The Mageslayer</a></li></ol></li><li class="chapter-item "><a href="01/05/02/00-the-expert.html"><strong aria-hidden="true">1.5.2.</strong> The Expert</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="01/05/02/01-the-bard.html"><strong aria-hidden="true">1.5.2.1.</strong> The Bard</a></li><li class="chapter-item "><a href="01/05/02/02-the-wise.html"><strong aria-hidden="true">1.5.2.2.</strong> The Wise</a></li></ol></li><li class="chapter-item "><a href="01/05/03/00-the-mage.html"><strong aria-hidden="true">1.5.3.</strong> The Mage</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="01/05/03/01-the-high-mage.html"><strong aria-hidden="true">1.5.3.1.</strong> The High Mage</a></li><li class="chapter-item "><a href="01/05/03/the-accursed.html"><strong aria-hidden="true">1.5.3.2.</strong> The Accursed</a></li><li class="chapter-item "><a href="01/05/03/the-beastmaster.html"><strong aria-hidden="true">1.5.3.3.</strong> The Beastmaster</a></li><li class="chapter-item "><a href="01/05/03/the-blood-priest.html"><strong aria-hidden="true">1.5.3.4.</strong> The Blood Priest</a></li><li class="chapter-item "><a href="01/05/03/the-duelist.html"><strong aria-hidden="true">1.5.3.5.</strong> The Duelist</a></li><li class="chapter-item "><a href="01/05/03/the-elementalist.html"><strong aria-hidden="true">1.5.3.6.</strong> The Elementalist</a></li><li class="chapter-item "><a href="01/05/03/the-healer.html"><strong aria-hidden="true">1.5.3.7.</strong> The Healer</a></li><li class="chapter-item "><a href="01/05/03/the-invoker.html"><strong aria-hidden="true">1.5.3.8.</strong> The Invoker</a></li><li class="chapter-item "><a href="01/05/03/the-necromancer.html"><strong aria-hidden="true">1.5.3.9.</strong> The Necromancer</a></li><li class="chapter-item "><a href="01/05/03/the-skinshifter.html"><strong aria-hidden="true">1.5.3.10.</strong> The Skinshifter</a></li><li class="chapter-item "><a href="01/05/03/the-thought-noble.html"><strong aria-hidden="true">1.5.3.11.</strong> The Thought Noble</a></li><li class="chapter-item "><a href="01/05/03/the-vowed.html"><strong aria-hidden="true">1.5.3.12.</strong> The Vowed</a></li></ol></li><li class="chapter-item "><a href="01/05/04-the-adventurer.html"><strong aria-hidden="true">1.5.4.</strong> The Adventurer</a></li></ol></li><li class="chapter-item "><a href="01/06-foci.html"><strong aria-hidden="true">1.6.</strong> Foci</a></li><li class="chapter-item "><a href="01/07-final-character-creation-steps.html"><strong aria-hidden="true">1.7.</strong> Final Character Creation Steps</a></li></ol></li><li class="chapter-item "><a href="02/00-the-rules-of-the-game.html"><strong aria-hidden="true">2.</strong> The Rules of the Game</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="02/01-scenes-rounds-and-turns.html"><strong aria-hidden="true">2.1.</strong> Scenes, Rounds, and Tuns</a></li><li class="chapter-item "><a href="02/02-saving-throws.html"><strong aria-hidden="true">2.2.</strong> Saving Throws</a></li><li class="chapter-item "><a href="02/03-skill-checks.html"><strong aria-hidden="true">2.3.</strong> Skill Checks</a></li><li class="chapter-item "><a href="02/04-combat.html"><strong aria-hidden="true">2.4.</strong> Combat</a></li><li class="chapter-item "><a href="02/05-injury-healing-and-system-strain.html"><strong aria-hidden="true">2.5.</strong> Injury, Healing, and System Strain</a></li><li class="chapter-item "><a href="02/06-chases-and-pursuit.html"><strong aria-hidden="true">2.6.</strong> Chases and Pursuit</a></li><li class="chapter-item "><a href="02/07-character-advancement.html"><strong aria-hidden="true">2.7.</strong> Character Advancement</a></li><li class="chapter-item "><a href="02/08-crafting-and-modifying-gear.html"><strong aria-hidden="true">2.8.</strong> Crafting and Modifying Gear</a></li><li class="chapter-item "><a href="02/09-encumbrance.html"><strong aria-hidden="true">2.9.</strong> Encumbrance</a></li><li class="chapter-item "><a href="02/10-falling-and-other-hazards.html"><strong aria-hidden="true">2.10.</strong> Falling and Other Hazards</a></li><li class="chapter-item "><a href="02/11-overland-travel.html"><strong aria-hidden="true">2.11.</strong> Overland Travel</a></li><li class="chapter-item "><a href="02/12-wilderness-exploration-and-expeditions.html"><strong aria-hidden="true">2.12.</strong> Wilderness Exploration and Expeditions</a></li><li class="chapter-item "><a href="02/13-dungeon-exploration.html"><strong aria-hidden="true">2.13.</strong> Dungeon Exploration</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
